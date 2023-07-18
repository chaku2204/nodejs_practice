const chalk = require('chalk');
var validator = require('validator');
console.log(chalk.red.underline.inverse("hello"));

const resulr = validator.isEmail('chakugu@gmail.com');
console.log(resulr?chalk.green.inverse(resulr) : chalk.red.inverse(resulr));
