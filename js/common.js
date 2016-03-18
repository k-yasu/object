/*
if(typeof MYAPP === 'undefined') {
    var MYAPP = {};
}
*/
var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_string) {
    var parts = ns_string.split('.');
    var parent = MYAPP;
    var i;

    if(parent[0] === 'MYAPP') {
        parts = parts.slice(1);
    }

    for(i = 0; i < parts.length; i += 1) {
        if(typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }

    return parent;
};
