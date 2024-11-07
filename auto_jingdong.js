launchApp("京东");

let item = null

const clickDesc = function (s) {
    sleep(random(3000, 5000))
    if (desc(s).findOne() !== null) {
        desc(s).findOne().click()
    }
}

const clickText = function () {
    sleep(random(3000, 5000))
    item = text('客户服务').findOne()
    if (item !== null) {
        click(item.bounds().centerX(), item.bounds().centerY())
    }
}

clickDesc('我的')
clickText('客户服务')
clickText('价格保护')
clickText('一键价保')