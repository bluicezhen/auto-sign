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
        return
    }

    if (isSimClick) {
        var b = item.bounds()
        click(b.centerX(), b.centerY());
        return
    }

    item.click()
}

launch("com.eg.android.AlipayGphone");

