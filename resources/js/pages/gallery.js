(function ($) {
    'use strict';
    $(document).ready(function () {
        $('a[data-bs-toggle="tab"]').on('show.bs.tab', function (e) {
            e.target; // newly activated tab
            e.relatedTarget; // previous active tab
            $('#clothing-nav-content .tab-pane').removeClass('show active');
        });

        $('.fancybox').fancybox();
        // Change title type, overlay closing speed
        $('.fancybox-effects-a').fancybox({
            helpers: {
                title: {
                    type: 'outside',
                },
                overlay: {
                    speedOut: 0,
                },
            },
        });
        // Disable opening and closing animations, change title type
        $('.fancybox-effects-b').fancybox({
            openEffect: 'none',
            closeEffect: 'none',

            helpers: {
                title: {
                    type: 'over',
                },
            },
        });
        // Set custom style, close if clicked, change title type and overlay color
        $('.fancybox-effects-c').fancybox({
            wrapCSS: 'fancybox-custom',
            closeClick: true,
            openEffect: 'none',

            helpers: {
                title: {
                    type: 'inside',
                },
                overlay: {
                    css: {
                        background: 'rgba(238,238,238,0.85)',
                    },
                },
            },
        });
        // Remove padding, set opening and closing animations, close if clicked and disable overlay
        $('.fancybox-effects-d').fancybox({
            padding: 0,

            openEffect: 'elastic',
            openSpeed: 150,

            closeEffect: 'elastic',
            closeSpeed: 150,

            closeClick: true,

            helpers: {
                overlay: null,
            },
        });
        /*
         *  Button helper. Disable animations, hide close button, change title type and content
         */
        $('.fancybox-buttons').fancybox({
            openEffect: 'none',
            closeEffect: 'none',

            prevEffect: 'none',
            nextEffect: 'none',

            closeBtn: false,

            helpers: {
                title: {
                    type: 'inside',
                },
                buttons: {},
            },

            afterLoad: function () {
                this.title =
                    'Image ' +
                    (this.index + 1) +
                    ' of ' +
                    this.group.length +
                    (this.title ? ' - ' + this.title : '');
            },
        });
        /*
         *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
         */
        $('.fancybox-thumbs').fancybox({
            openEffect: 'elastic',
            openSpeed: 150,

            closeEffect: 'elastic',
            closeSpeed: 150,

            helpers: {
                title: {
                    type: 'outside',
                },
                thumbs: {
                    width: 50,
                    height: 50,
                },
            },
        });
    });
})(jQuery);
