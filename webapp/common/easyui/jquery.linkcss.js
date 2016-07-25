;(function($){
    $.fn.extend({
        linkCss: function(){
            this.css({
                'text-decoration': 'underline',
                'cursor':'pointer',
                'color':'#0e6595'
            });
            return this;
        }
    });
})(jQuery);