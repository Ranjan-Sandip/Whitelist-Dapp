require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/dr6YhpgDRHzL4uXytCpDK-82aF1NAyFx",
      accounts: ["247c7f3951d086fccbc973a98be972b93503cd0c5b8c37bff24e5e0b8a0f51e7"],
    },
  },
};