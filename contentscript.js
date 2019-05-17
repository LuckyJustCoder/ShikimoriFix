
function addButton(){
	var actualCode = `if(!$('.watch_link').length )$(".watch-online-placeholer").append("<a class='b-link_button dark watch_link watch-online'>Смотреть онлайн</a>");$(".watch_link").attr("href", window.gon.watch_online.watch_url); `;
	var script = document.createElement('script');
	script.textContent = actualCode;
	(document.head||document.documentElement).appendChild(script);
	script.remove();
}
addButton();
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.method == "addButton") {
			addButton();
        } 
    }
);  
