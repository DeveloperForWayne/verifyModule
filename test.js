const verifyMessage=require("./index.js"); 

let signature = "0xddd0a7290af9526056b4e35a077b9a11b513aa0028ec6c9880948544508f3c63" +
                  "265e99e47ad31bb2cab9646c504576b3abc6939a1710afc08cbf3034d73214b8" +
                  "1c";

let signingAddress = verifyMessage('hello world', signature);
console.log(signingAddress);