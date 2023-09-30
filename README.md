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
