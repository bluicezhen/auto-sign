let item = null

const clickDesc = function (s) {
    sleep(random(3000, 5000))
    if (desc(s).findOne() !== null) {
        desc(s).findOne().click()
    }
}

const clickText = function (s) {
    sleep(random(3000, 5000))
    item = text(s).findOne()
    if (item !== null) {
        click(item.bounds().centerX(), item.bounds().centerY())
    } else {
        console.log('Can not find text item', s)
    }
}

launchApp("京东")
clickDesc('我的')
clickText('客户服务')
clickText('价格保护')
clickText('一键价保')