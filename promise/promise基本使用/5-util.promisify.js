/**
 * util.promisify
 */

//引入util模块
const util = require('util');
//引入fs模块
const fs = require('fs')
//返回一个新函数
mineReadFile('./resoure/constent.txt').then((value) => {
    console.log(value.toString());
})