let setCallback = (link, callback)=>{
	callback && 
	typeof callback == 'function' && 
	(link.onload = link.onreadystatechange = (state)=> {
		if(state.isTrusted) {
			callback(link);
		}
	})
}

exports.appendStyles = (url, rel = 'stylesheet',callback)=>{
	let link = document.createElement('link');
	link.setAttribute('rel',rel);
	link.setAttribute('href',url);
	setCallback(link,callback);
	document.head.appendChild(link);
}