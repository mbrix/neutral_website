const configs = {
  AWS: {
    providerUrl: 'http://test-ethereum-api.neutralproject.com:8646',
    gatewayUrl: 'http://test-web-api.neutralproject.com:10000',
    vaultAddress: '0x924F62aC18889AA2F0d90Bb00BD2912328BE401E',
    nusd: {
      symbol: 'NUSD',
      name: 'Neutral Dollar',
      address: '0x260BC24ad31340238F39a7BfAEB4AB99aEBD942c',
      decimals: 6,
    },
    tokens: [
      {
        symbol: 'TUSD',
        name: 'True USD',
        address: '0xfaAa50616a81f9EFa41E44e41a05504e37c5eB3E',
        decimals: 18,
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xE660855929D574a3F8d95496107e61F6f9cD55C1',
        decimals: 6,
      },
      {
        symbol: 'DAI',
        name: 'Dai',
        address: '0xF0102478740D818640E762af5e990bbBF4A159E7',
        decimals: 18,
      },
      {
        symbol: 'PAX',
        name: 'Paxos Standard Token',
        address: '0xCF18bCA9eFa824789Aae33EEaa99a516272d513a',
        decimals: 6,
      },
    ],
  },
  Ropsten: {
    providerUrl: 'https://ropsten.infura.io/v3/94f3af2745c94d22a6d04478907a5f2b',
    gatewayUrl: 'http://ropsten-web-api.neutralproject.com:10000',
    vaultAddress: '0x0Bd3fEA45624056E935aa3932d9740Ca907fbAa7',
    nusd: {
      symbol: 'NUSD',
      name: 'Neutral Dollar',
      address: '0x1062004d5041b44C3BBa9E38B27f167F02396020',
      decimals: 6,
    },
    tokens: [
      {
        symbol: 'TUSD',
        name: 'True USD',
        address: '0x4CAa94C5EE3ab6400f1b5cC9Ed403D7F064690ab',
        decimals: 18,
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xdd4717e5BE7B9cCc578417FEBdaEa0BA5C3F4464',
        decimals: 6,
      },
      {
        symbol: 'DAI',
        name: 'Dai',
        address: '0x6946194bfC893891c23320465e5CF22f85D1878a',
        decimals: 18,
      },
      {
        symbol: 'PAX',
        name: 'Paxos Standard Token',
        address: '0x5F26417c7b82ee9313C6844c398199d0185E63c7',
        decimals: 6,
      },
    ],
  },
  Homestead: {
    providerUrl: 'https://mainnet.infura.io/v3/a3863c51d4844dc18b1cdf24f0d96ff9',
    gatewayUrl: 'https://production-web-api.neutralproject.com:10000',
    vaultAddress: '0x150f200B6BF29959130F8995Ca4b68E336FC147B',
    nusd: {
      symbol: 'NUSD',
      name: 'Neutral Dollar',
      address: '0x0C6144c16af288948C8fdB37fD8fEc94bfF3d1d9',
      decimals: 6,
    },
    tokens: [
      {
        symbol: 'TUSD',
        name: 'True USD',
        address: '0x0000000000085d4780B73119b644AE5ecd22b376',
        decimals: 18,
      },
      {
        symbol: 'USDC',
        name: 'USD Coin',
        address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
        decimals: 6,
      },
      {
        symbol: 'DAI',
        name: 'Dai',
        address: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
        decimals: 18,
      },
      {
        symbol: 'PAX',
        name: 'Paxos Standard Token',
        address: '0x8E870D67F660D95d5be530380D0eC0bd388289E1',
        decimals: 18,
      },
    ],
  },
};

export default {
  get: (env: string, key: string) => {
    return configs[env][key];
  },
};
