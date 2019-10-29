// require('shelljs/global');
const shell = require("shelljs");
var fs = require("fs");

const argv = require('yargs').argv;

const commit = argv._[0]
// const version = "V3.8.x.191023"
const path = `.git/logs/refs/heads/master`

// 提取版本号最后的数字
function getLastStr(options) {
    return options.split('.')[2]
}

// 替换版本号最后一位
// function replaceLastStr(options, lastStr) {
//     var arr = options.split('.')
//     var lastIndex = arr.lastIndexOf(lastStr)
//     arr.splice(lastIndex, 1, lastStr - 0 + 1)
//     return arr.join('.')
// }

// 获取文件里面匹配到的数据
// var grepStr = shell.grep(/\s.*?yankangjie/, path).stdout

// 获取当前分支
var nowBranch = fs.readFileSync(`.git/HEAD`).toString()
var nowBranchr = nowBranch.split("/").reverse()[0].toString()

console.log("当前分支", nowBranchr)
var data = fs.readFileSync(`.git/logs/refs/heads/master`).toString()
console.log(data)

// var datas = data.toString()
// 获取当前修改的commitID
// var datar = datas.match(/\s.*?yankangjie/g).reverse()[0].split(" ")[1].toString()
// console.log("同步读取: " + data.toString());

// console.log("当前commit", datar)

// var versionInfo = fs.readFileSync('./version/versions.js').toString()
// console.log(versionInfo.match(/(dev: "v){1}.*(\"\,)/g));

// fs.writeFile('index.html', datar, function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("异步读取文件数据: " + data.toString());
//     });
// });

// fs.writeFile('index.html', datar, function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("异步读取文件数据: " + data.toString());
//     });
// });

// fs.writeFile('input.txt', datar, function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("异步读取文件数据: " + data.toString());
//     });
// });

// var nowTime = new Date().getTime().toString().slice(0, 10)


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

// shell.exec('git checkout ykj')
// shell.exec(`git cherry-pick ${datar}`)
