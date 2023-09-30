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

run `yarn add --dev @chainlink/contracts`
this adds all the contracts chainlink has that we need to use for getting different price feeds
run `yarn add --dev hardhat-deploy`
this helps us maintain or deploy code as we wanna track our deplyments and want a better way to write test and deploy.js
`yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers`# hardhat-fund-me
