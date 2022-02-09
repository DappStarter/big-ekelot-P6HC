require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender skull rent renew saddle maid coral light army gentle'; 
let testAccounts = [
"0x33e033c4d3e07c6843d0e834c34e0a39638d8254560eff138af214b647de4a8c",
"0x1076d408e543549bc5f68fd57db380828f953138cf79b0aa3ddde66cc6e4fdcf",
"0x7e628161594a87490700244b2a116307163e59035a711ec98699adf26c95e71e",
"0x6d127ca24114bb531bb16dc66bc6ae5b4c50c15150217178cc3824e928bf3563",
"0x3c740e13fb4cf2c9ae58987394b03d7933c8fce6ca9879d291ffd6b0bf3416a9",
"0xb654e3bfa4b4a338f8a607fbd3fb657e26cda6493cb15dc41b4fecc81984b218",
"0x4cdfba5379e603f8f437f0a07588c9a63ffefd06fc0233cd5542ab1f18625a46",
"0x14705b973bb45633ccff65c1db09b771a639d9f4fd5d3770ebe85dbc118bded5",
"0x3c6ba68f2fff53cc3c142bacd9f6ac9c97c43a02531515866a759afb7e22a605",
"0x767feaf818598521aa3da4ac506957fbd7160ab9387b233726eb09072cf060c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

