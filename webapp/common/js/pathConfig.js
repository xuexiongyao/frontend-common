/**
 * Created by zhuwei on 2016/10/9.
 */
var pathConfig = {
    //静态资源路径
    staticPath : staticPath || 'http://static.jwzh.com:7777/jwzh',    //注意:静态资源路径请同步修改includeCSS.js中的路径!!!

    //本项目路径
    basePath : location.origin + location.pathname.substr(0,location.pathname.substr(1).indexOf("/")+1),

    //各个子项目路径
    bzdzPath : 'http://bzdz.jwzh.com:9012/jwzh-bzdz',
    syrkPath : 'http://syrk.jwzh.com:9013/jwzh-syrk',
    syfwPath : 'http://syfw.jwzh.com:9014/jwzh-syfw',
    sydwPath : 'http://sydw.jwzh.com:9015/jwzh-sydw',
    mainPath : 'http://www.jwzh.com',
    //mainPath : 'http://main.jwzh.com:9016/jwzh-main',
    managePath : 'http://manage.jwzh.com:9017/jwzh-manage',
    xlpcPath : 'http://xlpc.jwzh.com:9018/jwzh-xlpc',
    jcjPath : 'http://jcj.jwzh.com:9019/jwzh-jcj',
    qbldPath : 'http://qbld.jwzh.com:9020/jwzh-qbld',
    jwrzPath : 'http://jwrz.jwzh.com:9021/jwzh-jwrz',
    anjianPath : 'http://anjian.jwzh.com:9022/jwzh-anjian',
    workflowPath : 'http://workflow.jwzh.com:9023/jwzh-workflow',
    zhcxPath : 'http://zhcx.jwzh.com:9024/jwzh-zhcx',
    wfmanagePath : 'http://wfmanage.jwzh.com:9025/jwzh-wfmanage',
    assistPath : 'http://assist.jwzh.com:9026/jwzh-assist'
};