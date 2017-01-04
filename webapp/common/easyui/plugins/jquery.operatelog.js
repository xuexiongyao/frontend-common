/**
 *  author: QinXiaoYun
 *  description: query system operate logs
 */
(function($){

    // 在插件容器中，创建一个 公共变量 存储 一个私有方法
    var privateFunction = function(){
        //TODO:私有方法
    };

    var settings = {};

    // 通过字面量创建爱你一个对象，存储我们需要的公共方法
    var methods = {
        // 初始化方法
        init : function (options) {
            return this.each(function() {//多元素情况下调用

                /* 此处的 this 对象指向的一个DOM元素，
                 * 而上边的 this.each 中的 this 指向一个jQuery对象，因为each方式是jQuery命名空间下的方法
                 */
                var $this = $(this);
                settings = $this.data('operatelog');
                if(typeof (settings) == 'undefined'){

                    //默认参数对象
                    var defaults = {
                        tabTitle : '操作日志历史轨迹',
                        url : managerPath+'/sysOperateLog/historyPage?conditionStr='+$this.attr('conditionStr')/*+'&funccodes='+$this.attr('funccodes')*/,
                        tab_id : $this.attr('conditionStr')
                    };

                    if(typeof ($this.attr("tabTitle")) != "undefined" && $this.attr('tabTitle') != ''){//如果tabTitle不为空，那么就是用默认
                        defaults.tabTitle = $this.attr("tabTitle")+"|操作日志历史轨迹";
                    }
                    settings = $.extend({},defaults,options);//合并defaults对象和options对象
                    $this.data('operatelog',settings);
                }
                else{
                    settings = $.extend({},defaults,options);
                }

                var pageLevel = "1";//默认为一级页面
                pageLevel = $this.attr('pageLevel');
                var pageLevelArray = pageLevel.split(',');
                $this.on('click',function(){
                    for(var i=0;i<pageLevelArray.length;i++){
                        if("1" == pageLevelArray[i]) {
                            crossAddTab(settings.tabTitle, settings.url, settings.tab_id);
                        }
                        if("2" == pageLevelArray[i]) {
                            parent.crossAddTab(settings.tabTitle,settings.url,settings.tab_id);
                        }
                        if("3" == pageLevelArray[i]) {
                            parent.parent.crossAddTab(settings.tabTitle,settings.url,settings.tab_id);
                        }
                    }

                })
            });
        },
        //销毁方法
        destory : function(options) {
            // 对选择器中的多个元素，都执行到方法
            return this.each(function () {
                var $this = $(this);
                // $this.removeData('pluginName');
            });
        },
        //返回值方法参数项
        options: function(){
            if(settings == {}){
                console.log('elements called "logs" does not init! ' );
            }
            return settings;
        }
    };


    /**
     * 一个jQuery插件本质上是我们塞进jQuery命名空间中一个庞大的函数，
     * 1）jQuery.pluginName = function;
     *    此方法插件代码就暴露在外部，没有被保护的暴露状态，调用者可以随意更改。
     * 2) jQuery.fn.pluginName = function;
     *    jQuery.fn 是 jQuery.prototype 的简写。
     *    意味着我们通过 jQuery 命名空间去获取我们的插件的时候，仅可写，不可修改。
     * @returns {*}
     */
    $.fn.operatelog = function(){
        var method = arguments[0];//获取参数

        if(methods[method]){//判断参数所指向的方法，存在
            method = methods[method];//获取所指向的方法，存储到method变量中
            arguments = Array.prototype.slice.call(arguments,1);
        } else if( typeof (method) == 'object' || !method){//如果传入的参数是空，或者对象，将会调用init方法
            method = methods.init;//获取init方法，存储到method变量中
        } else {//调用出错
            $.error( 'method' + method + ' does not exist on jQuery.logs' );
        }
        return method.apply(this,arguments);//最后调用这个 method 方法
    };



    //默认
    var $target = $('.operatelog');
    /*var $target_options = $.trim($target.attr("data-options"));
     if ($target_options) {
     if ($target_options.substring(0, 1) != "{") {
     $target_options = "{" + $target_options + "}";
     }
     }
     console.log($target_options);
     if( $target_options!= undefined && $target_options != ''){
     var options = $.parseJSON($target_options);
     }
     console.log(options);
     if(options){
     $target.logs(options);//默认使用data-options
     }
     else{
     $target.logs();//默认使用data-options
     }*/

    $target.operatelog();//默认使用data-options



})(jQuery);