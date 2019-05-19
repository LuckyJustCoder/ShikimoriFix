
chrome.webNavigation.onDOMContentLoaded.addListener(function (details) {
    chrome.tabs.executeScript(details.tabId, {file: "scripts/contentscript.js", runAt: 'document_end'}) // Инектим скрипт
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.sendMessage(tab.id, {method: "addButton"}, function (response) {
    });
});
