const ethers = require('ethers');
const NeutralVaultJSON = require('./NeutralVaultInterface.json');

interface NeutralVault {
  contract?: any
}

class NeutralVault implements NeutralVault {
  contract? = undefined;

  constructor(vaultAddress: string) {
    const provider = new ethers.providers.JsonRpcProvider('https://ropsten.infura.io/v3/94f3af2745c94d22a6d04478907a5f2b');
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
