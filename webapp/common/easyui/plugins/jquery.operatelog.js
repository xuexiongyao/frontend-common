/**
 *  author: QinXiaoYun
 *  description: query system operate logs
 */


/**
 * 为插件定义一个私有作用域。外界代码不能直接访问插件内部。插件内部代码不受外界干扰，也不会污染到全局变量。
 */
(function($){

    /**
     * $.extend(object) 可以理解为jquery添加一个静态方法
     * $.fn.extend(object) 可以理解为jquery实例添加一个方法
     */
    $.fn.operatelog = function(){
        var method = arguments[0];  //获取此方法的第一个参数,此参数为 methods 中包含的 方法

        if(methods[method]){//method 存在于 methods 中
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments,1);// 我们的方法是作为参数传入的，把它从参数列表中删除，因为调用方法时并不需要它
        }
        else if( typeof (method) == 'object' || !method){//如果传入的参数是空，或者 对象，将会调用init方法
            method = methods.init;
        }
        else {//调用出错
            $.error( 'method' + method + ' does not exist on jQuery.operatelog' );
        }

        // 用apply方法来调用我们的方法并传入参数
        return method.apply(this,arguments);
    };


    /**
     * 当前 存储参数 的对象
     */
    var settings = {};


    /*********************** 对外界开放 的方法********************/
    var methods = {
        //初始化方法
        init : function (options) {
            return this.each(function() {//this.each 中的 this 指向一个jQuery对象，因为each方式是jQuery命名空间下的方法

                /************** 构造默认参数 ****************/
                var defaults = {
                    tabTitle : '操作日志历史轨迹',
                    url : managerPath+'/sysOperateLog/historyPage?conditionStr=',
                    tab_id : ''
                };

                var $this = $(this);//此处的 this 对象指向的一个DOM元素，

                //尝试去获取 settings，如果不存在，则返回 “undefined”
                settings = $this.data('operatelog');

                if(typeof (settings) == 'undefined'){
                    defaults = setParams($this,defaults);//设置参数
                    settings = $.extend({},defaults,options);//合并 defaults对象 和 options对象
                    $this.data('operatelog',settings);
                }
                else{
                    settings = $.extend({},defaults,options);
                }

                var pageLevel = "1";//默认为一级页面
                if(typeof ($this.attr('pageLevel')) != 'undefined' && $this.attr('pageLevel') != ''){
                    pageLevel = $this.attr('pageLevel');
                }
                else{
                    console.log('日志配置中 pageLevel 属性：'+$this.attr('pageLevel'));
                }
                var pageLevelArray = pageLevel.split(',');
                $this.off('click').on('click',function(){
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
                });

            });
        },

        //销毁方法
        destory : function(options) {
            return this.each(function () {//对选择器中的多个元素，都执行到方法
                var $this = $(this);
                $this.removeData('operatelog');
            });
        },

        //外部调用此方法时，返回当前的 settings 对象
        options: function(){
            if(settings == {}){
                console.log('elements called "operatelog" does not init! ' );
            }
            return settings;
        }
    };


    /******************* 私有方法  *********************/

    /**
     * 通过传入当前对象，获取相应的 funccodes 字符串，多个用，号隔开
     * @param obj
     */
    var getFunccodesStr = function($this){
        var funccodesNotNull = false;
        var keyOfFuncCodesNotNull = false;
        var allCodes = '';

        var funccodes_str = '';
        if(typeof ($this.attr('funccodes')) != "undefined" &&  $this.attr('funccodes') != ""){
            funccodesNotNull = true;
            funccodes_str = $this.attr('funccodes');
        }

        var keyOfFuncCodes_str = '';
        if(typeof ($this.attr('keyOfFuncCodes')) != "undefined" &&  $this.attr('keyOfFuncCodes') != ""){
            keyOfFuncCodesNotNull = true;
            keyOfFuncCodes_str = $this.attr('keyOfFuncCodes');
        }

        if( !funccodesNotNull && !keyOfFuncCodesNotNull ){
            return '';
        }
        else{
            allCodes = combineFunccode(funccodes_str,keyOfFuncCodes_str);
        }

        if(allCodes != ''){
            return '&funccodes='+allCodes;
        }
        else{
            return '';
        }
    };

    /**
     * 合并 funccodes 和 日志配置文件中的 对应的code
     * @param funccodes
     * @param keyOfFuncCodes
     */
    var combineFunccode = function(funccodes,keyOfFuncCodes){
        if(typeof (funccodesOfConfigObj) != 'undefined' && typeof (funccodesOfConfigObj[keyOfFuncCodes]) != 'undefined'){
            var codesOfConfig = funccodesOfConfigObj[keyOfFuncCodes];
        }

        var arrayFromProp = [];
        if(typeof (funccodes) != 'undefined' && funccodes != ''){
            arrayFromProp = funccodes.split(',');
        }

        var arrayFromConfig = [];
        if(typeof (codesOfConfig) != 'undefined' && codesOfConfig != ''){
            arrayFromConfig = codesOfConfig.split(',');
        }

        if(arrayFromProp.length == 0 && arrayFromConfig.length == 0){
            return '';
        }
        else{
            var resultStr = mergeArray(arrayFromProp,arrayFromConfig).join(',');
            return resultStr;
        }
    };

    /**
     * 合并两个数组，去掉重复值
     * @param arr1
     * @param arr2
     * @returns {*}
     */
    var mergeArray = function (arr1, arr2){
        for (var i = 0 ; i < arr1.length ; i ++ ){
            for(var j = 0 ; j < arr2.length ; j ++ ){
                if (arr1[i] === arr2[j]){
                    arr1.splice(i,1); //利用splice函数删除元素，从第i个位置，截取长度为1的元素
                }
            }
        }
        //alert(arr1.length)
        for(var i = 0; i <arr2.length; i++){
            arr1.push(arr2[i]);
        }
        return arr1;
    };

    /**
     * 设置参数
     * @param defaults
     */
    var setParams = function($this,defaults){
        if(typeof ($this.attr('conditionStr')) != "undefined" &&  $this.attr('conditionStr') != ""){
            defaults.url += $this.attr('conditionStr');
            defaults.tab_id = $this.attr('conditionStr');
        }

        if(getFunccodesStr($this) != ''){
            defaults.url += getFunccodesStr($this);
        }

        if(typeof ($this.attr("tabTitle")) != "undefined" && $this.attr('tabTitle') != ''){//如果tabTitle不为空，那么就是用默认
            defaults.tabTitle = $this.attr("tabTitle")+"|操作日志历史轨迹";
        }
        return defaults;
    };


    /**
     *  ----------------------------- 调用例子 -------------------------------
     *  注意这些例子可以在目前的插件代码中正确运行，并不是所有的插件都使用同样的代码结构
     *
     *  -----------为每个类名为 ".className" 的元素执行init方法-----------
     *  $('.className').pluginName();
     *  $('.className').pluginName('init');
     *  $('.className').pluginName('init', {}); // 向init方法传入“{}”对象作为函数参数
     *  $('.className').pluginName({}); // 向init方法传入“{}”对象作为函数参数
     *
     *  -----------为每个类名为 “.className” 的元素执行destroy方法---------
     *  $('.className').pluginName('destroy');
     *  $('.className').pluginName('init', 'argument1', 'argument2'); // 把 "argument 1" 和 "argument 2" 传入 "init"
     */
    var $target = $('.operatelog');
    $target.operatelog();

})(jQuery);