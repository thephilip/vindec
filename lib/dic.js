const argsList = require('args-list');

module.exports = function () {
	const dic = {};
	const factories = {};
	const deps = {};

	// sounds worse than it is...
	dic.factory = function(name, factory) {
		factories[name] = factory;
	}

	// register a dependency
	dic.reg = function(name, dep) {
		deps[name] = dep;
	}

	// get registered 
	dic.get = function(name) {
		if(!deps[name]) {
			let factory = factories[name];
			deps[name] = factory && dic.inject(factory);
			if(!deps[name]) {
				throw new Error('Module not found: ' + name); // fix me
			}
		}
		return deps[name];
	}

	// inject dependencies by name arguments
	dic.inject = function(factory) {
		let args = argsList(factory)
			.map(function(dep) {
				return dic.get(dep);
			});
	}
}