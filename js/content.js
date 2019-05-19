
chrome.runtime.onMessage.addListener(function (request) {
        if (request.method === "addButton") {
            if (window.location.href.indexOf('https://shikimori.one/animes/') !== -1) {
                setTimeout(function () {
                    let actualCode = `if(!$('.watch_link').length && "watch_online" in window.gon) $(".watch-online-placeholer").append("<div class='block'><a class='b-link_button dark watch_link watch-online'>Смотреть онлайн</a></div>");$(".watch_link").attr("href", window.gon.watch_online.watch_url.substring(0, window.gon.watch_online.watch_url.length - 1)+((parseInt($('.current-episodes').text())||0)+1));`;
                    let script = document.createElement('script');
                    script.textContent = actualCode;
                    (document.head || document.documentElement).appendChild(script);
                    script.remove();
                }, 200);
            }
        }
    }
);