const { assert } = require("chai")
const { deployments, ethers, getNamedAccounts } = require("hardhat")

describe("FundMe", async function () {
    let fundMe
    let deployer
    let mockV3Aggregator
    beforeEach(async function () {
        //depoying all contracts using fixture
        //const accounts = await ethers.getSigners() //gets us all the accounts
        //const accountZero = account[0]
        deployer = await getNamedAccounts() //
        await deployments.fixture(["all"])
        fundme = await ethers.getContract("FundMe", deployer)
        mockV3Aggregator = await ethers.getContract(
            "MockV3Aggregator",
            deployer,
        )
    })
    describe("constructor", async function () {
        it("sets the aggregator addresses correctly", async function () {
            const response = await fundMe.priceFeed()
            assert.equal(response, mockV3Aggregator.address)
        })
    })
})
