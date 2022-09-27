/* 
       ___  ___    _  _  ___  _____   __  __             _         _   
 _ _  |_  )|   \  | \| || __||_   _| |  \/  | __ _  _ _ | |__ ___ | |_ 
| ' \  / / | |) | | .` || _|   | |   | |\/| |/ _` || '_|| / // -_)|  _|
|_||_|/___||___/  |_|\_||_|    |_|   |_|  |_|\__,_||_|  |_\_\\___| \__|
                                                                    
Update values accordingly
xxnft is the NFT SmartContract Address
xxmarket is the NFT MarketPlace Address
xxresell is the NFT MarketResell Address
xxnftcol is the already create NFT Collection Address
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js";
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "0x57fca5b6dfde9c360b945769fbb03c17ab37d27518f78f9ff4bd7f57d27d8f54";//"0x8207b7bbf486039b455923a402560ed041ad4b7243e9f329d6e415c00aaa9ef2";   //for eth,bsc and poly blockchain
export const simpleCrypto = new SimpleCrypto(cipherKey)                                   
export const cipherEth = simpleCrypto.encrypt(ethraw)                         //will use encryption of private key during func call
//export const cipherHH = simpleCrypto.encrypt(hhraw)
export var bridgeWallet = "0x857D7De803e6C5B3CDE0b5Ba02fbd4978685f2ad";


/*
IPFS API DETAILS
 */
// import {create as ipfsHttpClient} from 'ipfs-http-client';
// export const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0'); //IPFS API INFURA
//send File to ipfs and grab CID and use as tokenuri



// /*
// Rinkeby Testnet
// */
export var goeNFT = "0x52bf33A4ACae40EB68495E371AB1113d8b2B172D"; //source nfts
export var goeErc20 = "0x4234Ce706263A728e834BCb11dc1836E3C10428a";
export var goeCustody = "0x21C0cd3A9ff572AA3b67Cdb15b49B30eb6E3B81e";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

// /*
// BSC Testnet
// */
export var bsctNFT = "0x4234Ce706263A728e834BCb11dc1836E3C10428a";
export var bsctErc20 = "0x21C0cd3A9ff572AA3b67Cdb15b49B30eb6E3B81e";
export var bsctCustody = "0xF64C8615Df30E0b23363429B546e88DF5dFD8431";
export var bsctrpc = "https://bsctestapi.terminet.io/rpc";

// /*
// Polygon Mumbai Testnet
// */
// export var mmresell = "YOUR CONTRACT ADDRESS";
// export var mmnftcol = "YOUR CONTRACT ADDRESS";
export var mmNFT = "0xa2b91fBfAfC2A7335E84e9c2d795a44D74298921";
export var mmErc20 = "0x22cdc377103e25602fa0c6a10a62c3963375c65b";
export var mmCustody = "0x9E32bf21B2D2CD815b940D08b3DdCA0d65Bf0B5d";
export var mmrpc = "https://matic-testnet-archive-rpc.bwarelabs.com";