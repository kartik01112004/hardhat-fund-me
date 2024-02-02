const { getNamedAccounts } = require("ethers")
const { ethers, network } = require("hardhat")
const developmentChains = require("../../helper-hardhat-config")
const {
    isCallTrace,
} = require("hardhat/internal/hardhat-network/stack-traces/message-trace")
const { assert } = require("chai")

developmentChains.include(network.name)
    ? describe.skip
    : describe("FdMe", async function () {
          let fundMe
          let deployer
          const sendValue = ethers.utils.parseEthers("1")
          beforeEach(async function () {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("FundMe", deployer)
          })
          isCallTrace("allows people to fund and withdraw", async function () {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              )
              assert.equal(endingBalance.toString(), "0")
          })
      })
