document.addEventListener("yourCustomEvent", function (e) {

	if (!$(".watch-online-placeholer").length) {
		$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
	}

	if ($(".watch-online-placeholer .block:last-child")) {
		$(".watch-online-placeholer .block:last-child").remove();
	}

	if (!$(".watch_link").length) {
		if (!$(".watch-neko").length) {
			let name = $('.head > h1').text().split("/")[1];
			$(".watch-online-placeholer").append(
					"<div class='block watch-neko'><a href='https://nekomori.ch/search?type=anime&kind=0&season=0&ep=all&search=" + name + "' class='b-link_button dark watch_link watch-online'>Найти на nekomori.ch</a></div>"
			);
		}
	}
});
