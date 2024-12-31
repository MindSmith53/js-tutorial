const accountId = 12345
let accountEmail = 'areeb@gmail.com'
var accountPassword = '12345' // Prefer not to use var bcz of issue in block and functional scope
accountCity = 'Bareilly'

// accountId = 2; Not allowed bcz the variable is constant i.e. not changable
accountEmail = 'aa@gmail.com'
accountPassword = '67890'
accountCity = 'Delhi'

console.log([accountId, accountEmail, accountPassword, accountCity]);
