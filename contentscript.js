
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.method == "addButton") {
			var url = window.location.href;
			if(url.indexOf('https://shikimori.one/animes/') != -1)
				var actualCode = `if(!$('.watch_link').length )$(".watch-online-placeholer").append("<a class='b-link_button dark watch_link watch-online'>Смотреть онлайн</a>");$(".watch_link").attr("href", window.gon.watch_online.watch_url); `;
				var script = document.createElement('script');
				script.textContent = actualCode;
				(document.head||document.documentElement).appendChild(script);
				script.remove();
        } 
    }
);