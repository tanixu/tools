module.exports = {
	//时间格式化
	formatDate: function(date, format){
		var templateParts = {
			dd: (date.getDate() < 10 ? '0' : '') + date.getDate(),
			d: date.getDate(),
			mm: ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1),
			m: date.getMonth() + 1,
			yyyy: date.getFullYear(),
			yy: date.getFullYear().toString().substring(2),
			hh: (date.getHours() < 10 ? '0' : '') + date.getHours(),
			h: date.getHours(),
			ii: (date.getMinutes() < 10 ? '0' : '') + date.getMinutes(),
			i: date.getMinutes(),
			ss: (date.getSeconds() < 10 ? '0' : '') + date.getSeconds(),
			s: date.getSeconds()
		};
	
		var dateStr = format;
	
		for (var key in templateParts) {
			let val = templateParts[key];
			dateStr = dateStr.replace(key, val);
		}
	
		return dateStr;
	}
}