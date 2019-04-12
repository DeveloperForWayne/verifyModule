const ethers = require('ethers');

function verify(message, signature) {
    return ethers.utils.verifyMessage(message, signature);
}

module.exports = verify;