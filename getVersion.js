let $APP_VERSION = ``;
const $VERSION_INFO = {};

const getScenemapData = () => {
    $.getJSON("./version.json", function (data, status) {
        if (status == 'success') {
            $VERSION_INFO.env = 'dev'
            $APP_VERSION = getVersions($VERSION_INFO, data)
            console.log(data, $VERSION_INFO, getVersions($VERSION_INFO, data))
        } else {
            console.log("没有读取到本地文件：" + status);
        }
    })
}

getScenemapData()

const getVersions = (options, { a, b }) => {
    if (options.env === `dev`) {
        return a
    }
    if (options.env === `master`) {
        return b
    }
}
