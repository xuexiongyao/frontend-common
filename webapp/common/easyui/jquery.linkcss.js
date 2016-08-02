;(function($){
    $.fn.extend({
        linkCss: function(){
            this.css({
                'text-decoration': 'underline',
                'cursor':'pointer',
                'color':'#0e6595'
            });
            return this;
        },
        linkCssRed: function(){
            this.css({
                'text-decoration': 'underline',
                'cursor':'pointer',
                'color':'#ed4848'
            });
            return this;
        }
    });
})(jQuery);