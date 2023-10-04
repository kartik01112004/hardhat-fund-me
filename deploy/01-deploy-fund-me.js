// function deployFunc() {
//     console.log("hello")
// }

const { network } = require("hardhat")

// module.exports.default = deployFunc

// module.exports = async (hre) => {
//     const { getNamedAccounts, deployments } = hre
//same thing!

const { networkConfig } = require("../helper-hardhat-config")
// const {helperConfig}= require("../helper-hardhat-config")

const ethUsdPriceFeedAddress = networkConfig(chainId)["ethUsdPriceFeedAddress"]
//adding pricefeeds as per the network we are on

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [],
        log: true,
    })
}
