import algosdk from 'algosdk';

export const url = "https://mainnet-api.algonode.cloud";
export const algodClient = new algosdk.Algodv2("", url, "");

const mnumonic = '';

// get suggested parameters
const params = await algodClient.getTransactionParams().do();

// Account addr
const addr = '';
// VRF public key
const selectionKey = '';
const selectionKey_a = new Uint8Array(Buffer.from(selectionKey, 'base64'));
// Voting pub key
const voteKey = '';
const voteKey_a = new Uint8Array(Buffer.from(voteKey, 'base64'));
// State proof key
const stateProofKey =
  '';
const stateProofKey_a = new Uint8Array(Buffer.from(stateProofKey, 'base64'));

const firstValidBlock = 0;
const lastValidBlock = 0;
const keyDilution = 0;

// create transaction
const sp = await algodClient.getTransactionParams().do();
const onlineKeyreg = algosdk.makeKeyRegistrationTxnWithSuggestedParamsFromObject(
  {
    sender: addr,
    voteKey: voteKey_a,
    selectionKey: selectionKey_a,
    stateProofKey: stateProofKey_a,
    voteFirst: firstValidBlock,
    voteLast: lastValidBlock,
    voteKeyDilution: keyDilution,
    suggestedParams: sp,
  }
);

// sign transaction
const signedTxn = algosdk.signTransaction(onlineKeyreg, algosdk.mnemonicToSecretKey(mnumonic).sk);
const txnComplete = await algodClient.sendRawTransaction(signedTxn.blob).do();
console.log(txnComplete);