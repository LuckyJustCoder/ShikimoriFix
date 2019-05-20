
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    chrome.tabs.executeScript(details.tabId, {file: "js/content.js", runAt: 'document_end'});
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    chrome.storage.sync.get('select_language', function(data) {

        if(data['select_language'] === "ru"){
            chrome.tabs.sendMessage(tab.id, {method: "addButton_ru"}, function (response) {
            });
        }else{
            chrome.tabs.sendMessage(tab.id, {method: "addButton_en"}, function (response) {
            });
        }
    });

});
