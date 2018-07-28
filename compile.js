const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// source, 1 (specify the no.of contract we want to compile)
module.exports = solc.compile(source, 1).contracts[':Lottery'];
