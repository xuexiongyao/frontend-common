前端公共静态资源文件项目

项目目录结构：
src/main/webapp
    --.sass-cache  【前端sass编译文件缓存文件】
    
	#####公共组件########
	--common 公共组件
		--dict  【字典目录，系统启动时生成的字典存放的目录】
		--easyui   【easyui组件】
		--easyuiDiy 【easyui自定义样式】
		--gridly  【主页拖拽插件】
		--js  【公共js方法】
		--uploadfiles   【图片批量上传插件】
		--map   【地图插件】
		
	#####前端主页框架########
	--framework 【框架、登陆、首页组件】
	
	--sass  【前端sass源码】
	
	#####前端css########
	--stylesheets  
		--base.css  【子系统页面基础样式1  详情页面时间轴风格】
		--base2.css   【子系统页面基础样式2  详情页面tabs风格】
		--common.css   【公共css】
		--embedIframe.css   【iframe嵌套iframe css】
		--uploadImage.css  【图片上传css】
		
	#####业务相关文件######
	--css   【业务样式】
	
	--images  【业务图片】
	
	--js  【业务js】
	
	--WEB-INF 前端页面
		--pages 【前端jsp页面】
			--commonInclude.jsp  【包含了公共css文件，放在jsp的头部】
			--commonIncludeJs.jsp  【包含了公共js文件，为了加快页面加载速度，所以请放到jsp底部，</bady>标签后面，业务相关js再放到此js后面】
