require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index rifle ridge comic install fork bottom trip'; 
let testAccounts = [
"0xd66c8b86e885348e21f2db17e020bdf07c7e323ba4c4f0c10b9d9d24989fd049",
"0x7ffafb6d63a26549546598293f1795e843f1f09fe392c7ef60a827b3b0f342b9",
"0xbe7dc0b1afa3e3db34f88a0ac0e1493d17efea1e4042a047eae680b65b8e774b",
"0x08dcc6cb6f259a20abd1f364bc3c9d4dd3368e4135eb355b0f6c45288857bc27",
"0x5e210542a62232a43a6cb07b115239180b233e1cfa2b1be7c2e41b3a9007c321",
"0x54f0b0051c42a12944c4c57dae95a15fc01f273e948805de9884136d09075faa",
"0x764bc556fa337855b3e0a1870c03731dbefcd6ec60292e9bd31c9086e4048a86",
"0x178b2bc8cac5e0ecc2194d6baff52516c7b7cdd35e48001bf218e42ccb177482",
"0x5bfe688cf35fbd157186a4efdf666c2d49c5526b5b7814a486465f8dd5dee7a0",
"0xf28ffea9db8e118f320eb5d477e4da7d7140d1c36ea00cf06778b59c7e5b3c6c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


