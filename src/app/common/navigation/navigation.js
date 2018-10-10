const { Config } = require('./navigation.config');
const { AppTemplate } = require('../../../assets/js/appTemplate');

const TEMPLATE_CONFIG = {
	url : "/navigation.html",
	base : __dirname
}
class Navigation extends AppTemplate{
	constructor(args) {
		let template = super(TEMPLATE_CONFIG);
		template.on('ready',()=>this.onReady(template)).initLink();
		this.currentMenuIndex = 0;
	}

	onReady(template) {
		template.appendTo(Config.wrapperId);
		this.initMenuElements();
		this.activateFirstElement();
		this.initClickEvents();
	}

	initMenuElements() {
		let parent = document.getElementsByClassName('app_menus')[0];
		let template = "";
		Config.menu.forEach((menu)=>{
			template += `<div class="menu" id="${menu.id}">\
				<div class="icon text-center">\
					<i class="${menu.icon}"></i>\
				</div>\
				<div class="name text-center">\
					${menu.title}\
				</div>\
			</div>`;
		});
		parent.innerHTML = template;
	}

	activateFirstElement() {
		this.onClickMenu(
			document.getElementById(Config.menu[0].id),
			0
		);
	}

	onClickMenu(element, index) {
		let currentElement = document.getElementById(Config.menu[this.currentMenuIndex].id);
		currentElement.classList.remove('active');
		this.currentMenuIndex = index;
		element.classList.add('active');			
	}

	initClickEvents() {
		Config.menu.forEach((menu,index)=> {
			let element = document.getElementById(menu.id);
			element.onclick = ()=> this.onClickMenu(element,index);
		});
	}
}

new Navigation();