// function deployFunc() {
//     console.log("hello")
// }

const { network } = require("hardhat")
const { verify } = require("../utils/verify")
// module.exports.default = deployFunc

// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre
//same thing!

const { networkConfig, developmentChains } = require("../helper-hardhat-config")
// const {helperConfig}= require("../helper-hardhat-config")

//adding pricefeeds as per the network we are on

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // const ethUsdPriceFeedAddress =
    //     networkConfig(chainId)["ethUsdPriceFeedAddress"]
    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress =
            networkConfig[chainId]["ethUsdPriceFeedAddress"]
    }
    const args = [ethUsdPriceFeedAddress]
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: args,
        log: true,
        waitConfermations: network.config.blockConfirmations || 1,
    })
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, args)
    }

    log("----------------------------------------------------------")
}

module.exports.tags = ["all", "fundme"]
