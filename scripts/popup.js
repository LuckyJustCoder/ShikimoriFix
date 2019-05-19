$(document).ready(function () {

    $.ajax({
        url: "https://raw.githubusercontent.com/LuckyJustCoder/ShikimoriFix/master/config.json",
        success: function (data) {
            let manifestData = chrome.runtime.getManifest();

            if (JSON.parse(data)['actual_version'] === manifestData.version) {
                $('.version').text('Версия: ' + manifestData.version);
            } else {
                $('.version').text('Версия: ' + manifestData.version + ' устарела, актуальная версия: ' + JSON.parse(data)['actual_version'] + " [ПКМ]");
                $('.version').css('color', 'red');
            }
            $('.update').attr('href', "https://github.com/LuckyJustCoder/ShikimoriFix");
        }, error: function (jqXHR, exception) {
            let msg = '';
            let manifestData = chrome.runtime.getManifest();
            if (jqXHR.status === 0) {
                msg = 'Not connect.';
            } else if (jqXHR.status == 404) {
                msg = 'Requested page not found.';
            } else if (jqXHR.status == 500) {
                msg = 'Internal Server Error';
            } else if (exception === 'timeout') {
                msg = 'Time out error.';
            } else if (exception === 'abort') {
                msg = 'Ajax request aborted.';
            } else {
                msg = 'Uncaught Error.\n' + jqXHR.responseText;
            }
            $('.version').text('Версия: ' + manifestData.version + " Warning: " + msg);
        }
    });

    $('body').on('click', 'a', function () {
        if($(this).attr('class') === 'refresh'){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        }else{
            chrome.tabs.create({url: $(this).attr('href')});
        }
        return false;
    });
});
