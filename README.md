# Consensus Manager

Use this small node.js program to register your account with your node following generation of your participation keys.

## Before using this 
Use this small node.js program to register your account with your node following generation of your participation keys.

## Before using this 
- Follow and complete instructions at [Algorand Developers - Install a Node](http://example.com) to install your node.
- Generate your participation keys by following the instructions at [Algorand Developers - Generate participation keys](https://developer.algorand.org/docs/run-a-node/participate/generate_keys/)

## Configure this node.js app
- Fork this repository to your own
- Open the folder in VS Code
- run ``` npm i ``` to install dependancies

## Update the variables below in ``` index.js ```
All variable values can be found from your node console by running ```goal account partkeyinfo ``` 
```
// VRF public key
const selectionKey = '';
// Voting pub key
const voteKey = '';
// State proof key
const stateProofKey ='';
const firstValidBlock = 0;
const lastValidBlock = 0;
const keyDilution = 0;
```

## Add your account's address and mnemonic 
*Do not save these values in source control*
``` 
const addr = '';
const mnumonic = '';
```

## Run this app
- run the command ``` npm run start ```

If succesful you'll see the following (Your txid will vary):
```
PostTransactionsResponse {
  txid: 'NN5A3P474L2C7T4HYYPE55RGUVEZ5FONOQGIETJ2ASS6JY5KBIZA'
}
```
