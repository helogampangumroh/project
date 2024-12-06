(function ($) {
    'use strict';
    $(document).ready(function () {
        $('.select_email').select2({
            placeholder: 'Select an Email',
        });
        $('body').on('click', '.btn-codeview', function (e) {
            if ($('.note-editor').hasClass('fullscreen')) {
                var windowHeight = $(window).height();
                $('.note-editable').css('min-height', windowHeight);
            } else {
                $('.note-editable').css('min-height', '300px');
            }
        });
        $('body').on('click', '.btn-fullscreen', function (e) {
            setTimeout(function () {
                if ($('.note-editor').hasClass('fullscreen')) {
                    var windowHeight = $(window).height();
                    var windowWidth = $(window).width();
                    $('.note-toolbar').css('min-width', windowWidth);
                } else {
                    $('.note-toolbar').css('min-width', '300px');
                    $('.note-editable').css('min-height', '200px');
                }
            }, 500);
        });
        $('.note-link-url').on('keyup', function () {
            if ($('.note-link-text').val() != '') {
                $('.note-link-btn').attr('disabled', false).removeClass('disabled');
            }
        });

        function validateEditor() {
            $('#mail_compose').bootstrapValidator('revalidateField', 'email_message');
        }
        $('#mail_compose')
            .bootstrapValidator({
                excluded: [':disabled'],
                fields: {
                    email_message: {
                        validators: {
                            callback: {
                                message: 'The content is required and cannot be empty',
                                callback: function (value, validator) {
                                    var code = $('#summernote').summernote('code');
                                    // <p><br></p> is code generated by Summernote for empty content
                                    return code !== '' && code !== '<p><br></p>';
                                },
                            },
                        },
                    },
                    email_id: {
                        validators: {
                            notEmpty: {
                                message: 'The email address is required',
                            },
                            regexp: {
                                regexp: /^\S+@\S{1,}\.\S{1,}$/,
                                message: 'The input is not a valid email address',
                            },
                        },
                    },
                    subject: {
                        validators: {
                            notEmpty: {
                                message: 'Subject is required and cannot be empty',
                            },
                        },
                        minlength: 3,
                    },
                },
            })
            .find('[name="email_message"]')
            .summernote({
                callbacks: {
                    onKeyup: function (e) {
                        validateEditor();
                    },
                    onPaste: function (e) {
                        validateEditor();
                    },
                },
            });
    });
})(jQuery);