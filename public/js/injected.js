document.addEventListener("yourCustomEvent", function (e) {
	let props = JSON.parse(e.detail);

	if (!$(".watch-online-placeholer").length) {
		$(".c-info-right").append("<div class='watch-online-placeholer'></div>");
	}

	if ($(".watch-online-placeholer .block:last-child")) {
		$(".watch-online-placeholer .block:last-child").remove();
	}

	if (!$(".watch_link").length) {

		$(".watch-online-placeholer").append(
				"<div class='block'><a class='b-link_button dark watch_link watch-online'>Смотреть онлайн</a></div>"
		);

		let episode = (parseInt($(".current-episodes").text()) || 0) + 1;
		if (parseInt($(".total-episodes").text()) < parseInt(episode) - 1) {
			episode = 1;
		}

		let id = window.location.href
				.split("/")[4]
				.split("-")[0]
				.replace(/[^-0-9]/gim, "");
		let total = $(".total-episodes").text();
		let title = $(".inline")
				.parent()
				.text();
		$(".watch_link")
			.attr("target", "_blank")
			.attr("href", `https://app.nekomori.ch/player/${id}`);		
// 		if (props['open_with'] === true) {

// 		} else {
// 			$(".watch_link").attr(
// 					"href",
// 					`${props['link']}#/${id}/${episode}/?total=${total}&title=${title}`
// 			);
// 		}
	}
});
