let link;

document.addEventListener("yourCustomEvent", function(e) {
	let cofg = JSON.parse(e.detail);
	link = cofg.link;

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
		if (cofg.open_with === true) {
			$(".watch_link")
					.attr("target", "_blank")
					.attr("href", `https://app.nekomori.ch/player/${id}`);
		} else {
			$(".watch_link").attr(
					"href",
					`${cofg.link}#/${id}/${episode}/?total=${total}&title=${title}`
			);
		}
	}
});
