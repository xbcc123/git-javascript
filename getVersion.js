let $APP_VERSION = ``;
const $VERSION_INFO = {};

const getScenemapData = () => {
    $.ajax({
        type: "get",
        async: false,
        url: "http://169.254.24.36:9797/versions.js?t=" + new Date(),
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jsonhandle",//要执行的回调函数
        success: function (data) {
            $VERSION_INFO.env = 'dev'
            $APP_VERSION = getVersions($VERSION_INFO, data)
            console.log(data, $VERSION_INFO, getVersions($VERSION_INFO, data))
            $('#version').text($APP_VERSION)
        }
    });
    // $.getJSON("./version/versions.json", function (data, status) {
    //     if (status == 'success') {
    //         $VERSION_INFO.env = 'product'
    //         $APP_VERSION = getVersions($VERSION_INFO, data)
    //         console.log(data, $VERSION_INFO, getVersions($VERSION_INFO, data))
    //         $('#version').text($APP_VERSION)
    //     } else {
    //         console.log("没有读取到本地文件：" + status);
    //     }
    // })
}

getScenemapData()

const getVersions = ({ env }, { dev, test, product }) => {
    if (env === `dev`) {
        return dev.version
    }
    if (env === `test`) {
        return test.version
    }
    if (env === `product`) {
        return product.version
    }
}
