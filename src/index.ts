import fs from 'fs';
import { Addresses, calculateArgentxAddress, calculateBraavosAddress } from './Helpers';


async function main() {

  const pkArr = fs.readFileSync('keys.txt').toString().replaceAll('\r', '').split('\n');

  let addressArr: Addresses[] = [];

  for (const pk of pkArr) {
    addressArr.push({
      Pkey: pk,
      Argent: calculateArgentxAddress(pk),
      Braavos: calculateBraavosAddress(pk)
    });
  }

  console.log(addressArr);
  fs.writeFileSync('addresses.txt', JSON.stringify(addressArr, null, 2));
}

main()