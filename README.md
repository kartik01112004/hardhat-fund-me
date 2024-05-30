**([Click here to get frontend code](https://github.com/kartik01112004/html-fund-me) )**
just deploy this and add the abi and contract address to constants.js file 

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Starting a project

make a new folder using `mkdir folder_name`<br>
Add yarn : `yarn` <br>
Add hardhat : `yarn add --dev hardhat`<br>
Run hardhat : `yarn hardhat`<br>

## Linting

linting is a processof running a program that analyse code for potential errors
we can use solhint to lint our code.. to analyze and correct it

Add solhint :- `yarn add solhint`

# More on setup

run `yarn add --dev @chainlink/contracts`<br>
this adds all the contracts chainlink has that we need to use for getting different price feeds<br>
run `yarn add --dev hardhat-deploy`<br>
this helps us maintain or deploy code as we wanna track our deplyments and want a better way to write test and deploy.js<br>
`yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers`# hardhat-fund-me<br>

when we use deploy function from terminal we need to make a deploy folder that
deploys different solidity files and we make diffent files in that folder and number them in order we wanna deploy them.

We do not use a main function and call that but we make an another function of our choice and call that

## Mocking

Mocking is a method to test our project by unit testing and create mocks for the part of code we cannot get output for without ruuning them like making a request to the server (200,403,500 output codes) creating mocks are essential because we dont always want to deploy our contract and wait for the responce..

also in this project we have a <i>priceconverter.sol</i> file which relies on a pre existing smart contract <i>AggregatorV3Interface.sol</i> and it contain differnet blocks which contain value of differene different currencies and have multiple tyle of crypto and contain huge data so we need to craete a mock in order to make use of different blocks it contains as per our reqirements and not change our code everytime we want to get another currency value!

Problem occures when we want to use diffrent chains then we cannot hardcode our block number then we need to have the block numbe rfor that perticular chain..so we create mocks

## aave

## helper-hardhat-config

## Creating mocks

We import mocks from chainlink directly insted of copying them individualy

here by `import "@chainlink/contracts/src/v0.6/tests/MockV3Aggregator.sol";`

keep in mind taht you use the same solidity version for the new mock cotract as of in the chainlink mocks on github

## Using different solidity versions

````solidity: {
        compilers: [
            {
                version: "0.8.7",
            },
            {
                version: "0.6.6",
            },
        ],
    },```
````

## Solidity style guide

it is always good to use style guide as it makes our code easier to read it helps us keep variable names etc.....

### Ethereum Stackexchange

https://ethereum.stackexchange.com/questions/139409/hardhat-deploy-typeerror-ethers-getcontract-is-not-a-function

## GREP

allows us to run single single test
`yarn hardhat test --grep "<whatever testcase we wanna run>"`

## Debugging

we can create breakpoints by clicking before the line numbr for a red dot then in debugging tab we can use javascriot debugger to debug the code by this we can see the variables and objects and there values it can help us understand what is going on..

we can also add a hardhat plugin console.sol which lets us use console.log in solidity so when we run tests we get the consolesed out things for debugging

## Gas 3

when we use arithmatic operations on 2 big numbers we should use `.add()` `.mul()` etc for less erros as bignumbers are objects and dont get get added or devided

when we test for eth in wallet or contract we should consider gas spent and add that in our checks

## console.log

we can use this for debugging in solidity
