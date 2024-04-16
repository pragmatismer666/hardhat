require("@nomicfoundation/hardhat-toolbox");
BSCSCAN_API = "AAEAMPVYXP57ZBT4HJTKZMFDQIF1SDPE2B"
POLYSCANSCAN_API = "VWUX5MNUYW9DMVF9J6RY8VWFJYC3PS1ZVI"
PRIVATE_KEY = "a980fa313572f01729967d4cdb117858d730c3fbda238e8e3d51d3df2f92e003"
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.8.0"
            },
            {
                version: "0.8.0"
            }
        ]
    },
    defaultNetwork: "goerli",
    allowUnlimitedContractSize: true,
    networks: {
        bscmainnet: {
            url: `https://bsc-dataseed.binance.org`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        bscTestnet: {
            url: `https://bsc-testnet.public.blastapi.io`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        ethmainnet: {
            url: `https://eth-mainnet.g.alchemy.com/v2/mwb1brjdSHo3FDsAV4LdcLsdP1Re0XiY`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/Iv9GXgJKLs9bIhaL9CQzwx8hYx1fv9TV`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        polygon: {
            url: `https://polygon-rpc.com/`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        avalanche: {
            url: `https://api.avax.network/ext/bc/C/rpc`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        fantom: {
            url: `https://rpc.ftm.tools`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        harmony: {
            url: `https://api.harmony.one`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        mumbai: {
            url: `https://matic-mumbai.chainstacklabs.com/`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        kovan: {
            url: `https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        ropsten: {
            url: `https://ropsten.infura.io/v3/5b6eb837267f4d8c806a7bdf42937a20`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/2FPOgAFnDbWTDr5so71KFsDgTcd`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        tbinance: {
            url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        },
        tfantom: {
            url: `https://rpc.testnet.fantom.network/`,
            accounts: [`0x${PRIVATE_KEY}`],
            timeout: 20000000
        }
    },
    etherscan: {
        apiKey: {
            polygon: `${POLYSCANSCAN_API}`,
            mumbai: `${POLYSCANSCAN_API}`,
            bscTestnet: `${BSCSCAN_API}`,
            goerli: `${BSCSCAN_API}`
        },
        customChains: [
            {
                network: "mumbai",
                chainId: 80001,
                urls: {
                    apiURL: "https://api-mumbai.polygonscan.com/api",
                    browserURL: "https://mumbai.polygonscan.com"
                }
            },
            {
                network: "polygon",
                chainId: 80001,
                urls: {
                    apiURL: "https://api-mumbai.polygonscan.com/api",
                    browserURL: "https://mumbai.polygonscan.com"
                }
            }
        ]
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
        deploy: "./scripts/deploy",
        deployments: "./deployments",
    },
};
