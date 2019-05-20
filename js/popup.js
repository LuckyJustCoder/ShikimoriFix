$(document).ready(function () {

    chrome.storage.sync.get('select_language', function(data) {
        if (typeof data['select_language'] === "undefined") {
            let language;
            if (window.navigator.languages) {
                language = window.navigator.languages[0];
            } else {
                language = window.navigator.userLanguage || window.navigator.language;
            }
            setLang(language.split("-")[0]);
        } else {
            setLang(data['select_language']);
        }

    });

    $('body').on('click', 'a', function () {
        if($(this).attr('class') === 'refresh'){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
            });
        } else if($(this).attr('class') === 'set_lang_ru'){
            chrome.storage.sync.set({ 'select_language': 'ru' });
            setLang('ru');
        } else if($(this).attr('class') === 'set_lang_en') {
            chrome.storage.sync.set({'select_language': 'en'});
            setLang('en');
        } else{
            chrome.tabs.create({url: $(this).attr('href')});
        }
        return false;
    });
});

function setLang(lang) {

    $.ajax ({ url: "config.json", method: "GET",
            success: function (data) {
                $('.hello').text(data.language['hello_message'][lang]);
                $('.description').text(data.language['description_message'][lang]);
                $('.description').append("<a href=\"https://shikimori.one/animes/\">shikimori.one</a>");
                $('.bug-mess').text(data.language['bugtraker_message'][lang]);
                $('.version').text(data.language['version_message'][lang]);

                $.ajax({
                    url: "https://raw.githubusercontent.com/LuckyJustCoder/ShikimoriFix/master/config.json",
                    success: function (res) {
                        let manifestData = chrome.runtime.getManifest();

                        if (JSON.parse(res)['actual_version'] === manifestData.version) {
                            $('.version').text(data.language['version_message'][lang]  + manifestData.version);
                        } else {
                            $('.version').text(data.language['version_message'][lang] + manifestData.version + data.language['version_actual'][lang] + JSON.parse(res)['actual_version']);
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
            }
    });
}