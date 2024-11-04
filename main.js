var MAX_RETRY = 10

function clickText(text, cn, isSimClick) {
    for (var i =0; i < MAX_RETRY; i++) {
        sleep(1000)
        var item = className(cn)
        switch (cn) {
            case "android.view.View":
                item = item.desc(text).findOnce()
                break
            case "android.widget.TextView":
                item = item.text(text).findOnce()
                break
            default:
                console.error("Unsupported ClassName", cn)
                exit(1)
        }
        console.log('click text', text, item)

        if (item !== null) {
            if (isSimClick) {
                var b = item.bounds()
                click(b.centerX(), b.centerY());
                break
            }
            item.click()
            break
        }
    }
}


var w = floaty.window(
    <frame gravity="center">
        <text id="text">悬浮文字</text>
    </frame>
);

launch("com.jingdong.app.mall");
clickText("我的", "android.view.View", false)
clickText("京豆", "android.widget.TextView", true)
clickText("去签到领京豆", "android.widget.TextView", true)
clickText("签到领豆", "android.widget.TextView", true)
back()
clickText("全部领取", "android.widget.TextView", true)

w.close();