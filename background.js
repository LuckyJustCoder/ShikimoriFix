
chrome.webNavigation.onDOMContentLoaded.addListener(function(details) {
	chrome.tabs.executeScript(details.tabId, {file: "contentscript.js", runAt: 'document_end'})
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {method: "addButton"}, function(response) {
		});
	});
});