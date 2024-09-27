// https://eth-sepolia.g.alchemy.com/v2/0OKhROsECtT0ulf-u9IsQGmZe8YOQjDV

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks:{
    sepolia: {
      url : 'https://eth-sepolia.g.alchemy.com/v2/0OKhROsECtT0ulf-u9IsQGmZe8YOQjDV',
      accounts: ['7e2f3b5df7988745444907ebcf6c1aeec848f085ffebd8338236e6602ee03111']
    }
  }
}