/**
 * jQuery disableAfterClick plugin 0.1
 * http://github.com/orip/jQuery.disableAfterClick
 *
 * Copyright (c) 2009 Ori Peleg, http://orip.org
 *
 * Dual licensed under the MIT and GPL licenses, same as jQuery:
 *   http://docs.jquery.com/License
 */
(function($) {

$.fn.extend({
    disableAfterClick: function() {
        return this.click(function(event) {
            var $this = $(this);

            // TODO: save state with $this.data instead of relying on the
            // 'disabled' class?
            if ($this.is('.disabled')) {

                // necessary to prevent navigating to an anchor's href when
                // 'disabled' isn't support (most browsers), and to prevent a
                // race condition with not setting 'disabled' immediately
                event.preventDefault();

            } else {

                // set the 'disabled' class immediately, for the check above
                // and for styling
                $this.addClass("disabled");

                // If we set the 'disabled' attribute immediately, some
                // browsers won't execute the default action. Setting almost
                // immediately, after a 1ms timeout, fixes this.
                setTimeout(function() { $this.attr("disabled", "disabled"); }, 1);

            }
        });
    }
});

})(jQuery);
// vim:et sw=4:
