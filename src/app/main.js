const { loader } = require('../assets/js/dependencyLoader');
const { dependencies } = require('./common/dependencies');
const { pagesDependencies } = require('./pages/pagesDependencies');

loader([
	dependencies,
	pagesDependencies
]);