const ethers = require('ethers');

function verifyMessage(message, signature) {
    return ethers.utils.verifyMessage(message, signature);
}

module.exports = verifyMessage;