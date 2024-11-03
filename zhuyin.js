var zhuyinAdded = false;

browser.browserAction.onClicked.addListener(function(tab) {
    if (!zhuyinAdded) {
        browser.tabs.insertCSS(null, {file: "zhuyin.css"})
            .then(() => {
                zhuyinAdded = true;
            })
            .catch((error) => {
                console.error("Error inserting CSS: ", error);
            });
    } else {
        browser.tabs.insertCSS({
            code: '* {font-family: null !important;}'
        })
        .then(() => {
            zhuyinAdded = false;
        })
        .catch((error) => {
            console.error("Error removing CSS: ", error);
        });
    }
});
