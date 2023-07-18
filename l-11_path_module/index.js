const path = require("path")

console.log(path.dirname('D:/study/nodejs note/l-11_path_module/index.js'));
console.log(path.extname('D:/study/nodejs note/l-11_path_module/index.js')); 
console.log(path.basename('D:/study/nodejs note/l-11_path_module/index.js'));
console.log(path.parse('D:/study/nodejs note/l-11_path_module/index.js'));
const mypath = path.parse('D:/study/nodejs note/l-11_path_module/index.js');
console.log(mypath.name)