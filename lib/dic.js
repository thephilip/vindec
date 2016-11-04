/* 
 * Dependency Injection Container (currently unused)
 *
 */

const argsList = require('args-list'); // reads function params at init

module.exports = function () {
    const dic = {};
    const factories = {};
    const deps = {};

    // sounds worse than it is...
    dic.factory = function(name, factory) {
        factories[name] = factory;
    }

    dic.register = function(name, dep) {
        deps[name] = dep;
    }

    dic.get = function(name) {
        if(!deps[name]) {
            let factory = factories[name];
            // ensure factory exists then inject it
            deps[name] = factory && dic.inject(factory);
            if(!deps[name]) {
                throw new Error('Module not found: ' + name);
            }
        }
        return deps[name];
    }

    dic.inject = function(factory) {
        let args = argsList(factory)
            .map(function(dep) {
                return dic.get(dep);
            });
        return factory.apply(null, args);
    }
}