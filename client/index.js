const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const nameIndex = 20;
  const leaf = niceList[20];
  const merkleTree = new MerkleTree(niceList);
  const proof = merkleTree.getProof(nameIndex);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof,
    leaf,
  });

  console.log({ gift });
}

main();
