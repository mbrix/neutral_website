const ethers = require('ethers');
const NeutralVaultJSON = require('./NeutralVaultInterface.json');

interface NeutralVault {
  contract?: any
}

class NeutralVault implements NeutralVault {
  contract? = undefined;

  constructor(vaultAddress: string) {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8646');
    this.contract = new ethers.Contract(
      vaultAddress,
      NeutralVaultJSON.abi,
      provider,
    );
  }

  async getLineBalance(nusdAddress: string, tokenAddress: string) {
    const balance = await this.contract.readAvailableBalance(
      nusdAddress,
      tokenAddress,
    );

    return balance;
  }
}

export default NeutralVault;
