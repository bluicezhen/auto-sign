var MAX_RETRY = 10

function getItem(text, cn) {
    for (var i = 0; i < MAX_RETRY; i++) {
        sleep(1000)
        var item = className(cn)
        switch (cn) {
            case "android.view.View":
                item = item.desc(text).findOnce()
                break
            case "android.widget.TextView":
                item = item.text(text).findOnce()
                break
        }
        console.verbose('get item', cn, text, item)
        if (item !== null) {
            return item
        }
    }
    return null
}

function clickText(text, cn, isSimClick) {
    var item = getItem(text, cn)

    if (item === null) {
        console.error('Can not found item', cn, text)
        exit()
    }

    if (isSimClick) {
        var b = item.bounds()
        click(b.centerX(), b.centerY());
        return
    }

    item.click()
}

// 京东 领京豆
// launch("com.jingdong.app.mall");
// clickText("我的", "android.view.View", false)
// sleep(1000)
// clickText("京豆", "android.widget.TextView", true)
// if (getItem("已签到", "android.widget.TextView") === null) {
//     clickText("去签到领京豆", "android.widget.TextView", true)
//     sleep(10000)
//     clickText("签到领豆", "android.widget.TextView", true)
//     sleep(10000)
//     back()
// } else {
//     console.log('已签到')
// }
// if (getItem("全部领取", "android.widget.TextView") !== null) {
//     clickText("全部领取", "android.widget.TextView", true)
// }

// // 京东 一键价保
// sleep(10000)
// back()
clickText("客户服务", "android.widget.TextView", true)
clickText("价格保护", "android.widget.TextView", true)
clickText("一键价保", "android.widget.TextView", true)