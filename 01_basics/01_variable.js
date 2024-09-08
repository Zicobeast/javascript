const accountId = 12345
let accountEmail = "aman@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate

// accountId = 2 not allowed
console.log(accountId);

accountEmail = "hsahsa"
accountPassword = 274752
accountCity = "delhi"

console.table([accountId,accountEmail,accountCity,accountPassword,accountstate])

/*
prefer not to use var
use let instead
beacause of issue in blockspace and functional scope
*/
