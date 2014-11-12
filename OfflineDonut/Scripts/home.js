(function (window, $) {

    var module = {

        elements: {
            online: null,
            offline: null
        },

        showMessages: function (isOnline) {
            if (isOnline) {
                module.elements.offline.hide();
                $.get('/events.html', function (markup) {
                    module.elements.online.html(markup).show();
                });
            }
            else {
                module.elements.offline.show();
                module.elements.online.hide();
            }
        },

        init: function () {

            module.elements.online = $('#events-online');
            module.elements.offline = $('#events-offline');

            window.applicationCache.onupdateready = function (e) {
                applicationCache.swapCache();
                window.location.reload();
            }

            Offline.on('confirmed-down', function () { module.showMessages(false); });
            Offline.on('confirmed-up', function () { module.showMessages(true); });

            module.showMessages(true);
        }
    };

    $(module.init);

}(window, jQuery));
