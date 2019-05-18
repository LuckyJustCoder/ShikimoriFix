$(document).ready(function(){

	$.ajax({
		url:'https://raw.githubusercontent.com/LuckyJustCoder/ShikimoriFix/master/config.json',
		success: function (data){
			let manifestData = chrome.runtime.getManifest();

			if(JSON.parse(data)['actual_version'] === manifestData.version){
				$('.version').text('Версия: ' + manifestData.version);
			}else{
				$('.version').text('Версия: ' + manifestData.version + ' устарела, актуальная версия: ' + JSON.parse(data)['actual_version']+" [ПКМ]");
				$('.version').css('color', 'red');
			}
			$('.update').attr('href', "https://github.com/LuckyJustCoder/ShikimoriFix");
		}
	});
	$('body').on('click', 'a', function(){
		chrome.tabs.create({url: $(this).attr('href')});
		return false;
	});
});
