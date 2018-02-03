import { pki, rsa } from 'node-forge';

rsa.generateKeyPair({bits: 4096, workers: 2}, (err, keypair) => {
  console.log(err);
  console.log(keypair);
});


