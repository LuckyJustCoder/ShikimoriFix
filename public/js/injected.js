document.addEventListener("yourCustomEvent", function (e) {

	if (!$(".watch-online-placeholer").length) {
		$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
	}

	if ($(".watch-online-placeholer .block:last-child")) {
		$(".watch-online-placeholer .block:last-child").remove();
	}

	if (!$(".watch_link").length) {
		if (!$(".watch-neko").length) {
			const id = location.pathname.split("/")[2].split("-")[0];
			$(".watch-online-placeholer").append(
					"<div class='block watch-neko'><a href='https://nekomori.ch/anime/-" + id + "/general' class='b-link_button dark watch_link watch-online'>Найти на nekomori.ch</a></div>"
			);
		}
	}
});
