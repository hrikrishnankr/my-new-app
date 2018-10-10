const {appendStyles} = require('./linkLoader');

// process scripts
let loadScripts = (dep)=>{
	dep.scripts.forEach((script)=>{
		require(dep.base + script)
	})
};

// process styles
let loadStyles = (dep)=>{
	dep.styles.forEach((style)=>{
		appendStyles(dep.base + style);
	})
};

let isClusterDependency = (dep)=> {
	return !!Array.isArray(dep);
};

let loadDependencyObject = (dependencies) => {
	for(let dep in dependencies) {
		switch(dep){
			case 'scripts' :
				loadScripts(dependencies);
				break;
			case 'styles' :
				loadStyles(dependencies);
		}
	}
};

exports.loader = (dependencies = {})=> {
	if(isClusterDependency(dependencies)) {
		for(let dependency of dependencies) {
			loadDependencyObject(dependency);
		}
	} else {
		loadDependencyObject(dependencies);
	}
}