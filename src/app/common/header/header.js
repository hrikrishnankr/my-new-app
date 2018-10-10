const {AppTemplate} = require('../../../assets/js/appTemplate');

const WRAPER_ID = '#app_header';
const TEMPLATE_CONFIG = {
	url : "/header.html",
	base : __dirname
}
class Header extends AppTemplate{
	constructor(args) {
		let template = super(TEMPLATE_CONFIG);
		template.on('ready',()=>this.onReady(template)).initLink();
	}

	onReady(template) {
		template.appendTo(WRAPER_ID);
	}
}

new Header();