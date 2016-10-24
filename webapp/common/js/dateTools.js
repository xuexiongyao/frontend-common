/**
 * 日期格式化
 * @param date 日期
 * @param filter 格式
 * @returns
 */
function getDateStr(date,filter){
	var yyyy=date.getFullYear();
	var mm=(date.getMonth()+1) >= 10 ? date.getMonth()+1 : '0'+(date.getMonth()+1);
	var dd=date.getDate() >= 10 ? date.getDate() : '0'+date.getDate();
	
	var hh=date.getHours() >= 10 ? date.getHours() : '0'+date.getHours();
	var mi=date.getMinutes() >= 10 ? date.getMinutes() : '0'+ date.getMinutes();
	var ss=date.getSeconds() >= 10 ? date.getSeconds() : '0'+ date.getSeconds();
	
	filter=filter.replace('yyyy',yyyy);
	filter=filter.replace('mm',mm);
	filter=filter.replace('dd',dd);
	filter=filter.replace('hh',hh);
	filter=filter.replace('mi',mi);
	filter=filter.replace('ss',ss);
	
	return filter;
}

/**
 * 日期前滚或后滚
 * @param date 日期
 * @param days 天数
 * @returns {Date}
 */
function dateScroll(date,days){
	return new Date(date.getTime() + days*24*60*60*1000);
}