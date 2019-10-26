// require('shelljs/global');
const shell = require("shelljs");

const argv = require('yargs').argv;

const commit = argv._[0]
const version = "V3.8.x.191023"
const path = `.git/logs/refs/heads/master`

// 提取版本号最后的数字
function getLastStr(options) {
    return options.split('.')[2]
}

// 替换版本号最后一位
function replaceLastStr(options, lastStr) {
    var arr = options.split('.')
    var lastIndex = arr.lastIndexOf(lastStr)
    arr.splice(lastIndex, 1, lastStr - 0 + 1)
    return arr.join('.')
}
// 获取文件里面匹配到的数据
var grepStr = shell.grep(/\s.*?\s/, path).stdout

console.log(new Date().getTime())

console.log(grepStr);


// // 再次匹配解决grep匹配不精准的问题
// var str = grepStr.match(/<version>.*<\/version>/)[0].replace('<version>', '').replace('</version>', '')

// // 获取最后一位的版本号
// var lastStr = getLastStr(str)

// // 获取完整版本号
// var repStr = replaceLastStr(str, lastStr)

// shell.exec(`git pull`)
// // 执行替换
// shell.sed('-i', /<version>.*<\/version>/, `<version>${repStr}<\/version>`, path);
// shell.exec('git add .')
// shell.exec(`git commit -m "${commit}"`)
// shell.exec(`git merge origin/${version}`)
// shell.exec(`git pull`)
// shell.exec('git push')
