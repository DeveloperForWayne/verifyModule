const ethers = require('ethers');

function verifyMessage(message, signature) {
    if(message && signature) {
        return ethers.utils.verifyMessage(message, signature);
    } else {
        return "variable can not be null";
    }
}

module.exports = verifyMessage;