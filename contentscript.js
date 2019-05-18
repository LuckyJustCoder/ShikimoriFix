
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.method == "addButton") {

			if(window.location.href.indexOf('https://shikimori.one/animes/') != -1){
				setTimeout(function(){
					var actualCode = `if(!$('.watch_link').length && "watch_online" in window.gon) $(".watch-online-placeholer").append("<a class='b-link_button dark watch_link watch-online'>Смотреть онлайн</a>");$(".watch_link").attr("href", window.gon.watch_online.watch_url); `;
					var script = document.createElement('script');
					script.textContent = actualCode;
					(document.head||document.documentElement).appendChild(script);
					script.remove();
				}, 200); // Великий костыль :3 Не бейте (иначе будет херачить ошибки мол watch_online не найден, потом нормально пофикшу)
			}
        } 
    }
);