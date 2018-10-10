const {appendStyles} = require('./linkLoader');

class AppTemplate {
	/**
	* @param options
	* can create template using this class
	**/
	constructor(options = {}) {
		this.events = {};
		this.options = options;
		this.setClass();
	}
	
	on(type,callback) {
		this.events[type] = callback;
		return this;
	}

	setClass(className = 'app_template') {
		this.options.className = className;
		return this;
	}

	initLink(){
		appendStyles(this.options.base + this.options.url, "import", this.events['ready']);
		return this;
	}


	appendTo(querySelector) {
		let links = document.querySelectorAll('link[rel="import"]');
		for(let link of links) {
			let template = link.import.querySelector('.' + this.options.className);
  			let clone = template.content && document.importNode(template.content, true);
  			/**
  				Check weather the link and the element to be appended 
				is present
  			**/
  			if (link.href.match(this.options.base + this.options.url) && clone){
  				let parent = document.querySelector(querySelector);
  				parent.appendChild(clone)
  			}
		}
		return this;
	}
}

exports.AppTemplate = AppTemplate;