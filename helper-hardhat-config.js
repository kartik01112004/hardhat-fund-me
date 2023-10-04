const networkConfig = {
    11155111: {
        name: "sapolia",
        ethUsdPriceFeedAddress: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
    137: {
        name: "polygon",
        ethUsdPriceFeedAddress: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITAIL_ANSWER = 200000000000

module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITAIL_ANSWER,
}
