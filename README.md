# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
```
Deploy Command
    npx hardhat run scripts/deploy.js
    npx hardhat run --network bscTestnet scripts/deploy.js
```
Verify Command : 
    npx hardhat verify --network bscTestnet tokenAddress
    npx hardhat verify --network bscTestnet 0xd3b1Bb93683FD9bBC3112d66b15Cb2729d9f0C0F
```
====================================================================================== neon
npx hardhat run scripts/deploy.js --network neonlabs
npx hardhat verify 0x09F5759D8D536B5791A64702b26B393aa46C020a --network neonlabs