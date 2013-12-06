/*
 * arykow-image
 * https://github.com/kdridi/arykow-image
 *
 * Copyright (c) 2013 Karim DRIDI
 * Licensed under the MIT license.
 */

'use strict';

var arykow = {
		mime: require('arykow-mime')
	};

var Image = function(mime) {
	if (mime === null || mime === undefined) {
		throw new Error('null');
	}
	this.name = null;
	this.data = null;
	this.extension = null;
	for(var p in mime) {
		this[p] = mime[p];
	}
	if (this.name === null) {
		throw new Error('name is null');
	}
	if (this.data === null) {
		throw new Error('data is null');
	}
	if (this.extension === null) {
		throw new Error('extension is null');
	}
};

Image.prototype.toHTML = function() {
	return 'data:' + this.name + ';base64,' + this.data.toString('base64');
};

exports.fromBuffer = function(buffer) {
	return arykow.mime.parseFromBuffer(buffer).then(function(mime) {
		return new Image(mime);
	});
};

exports.fromFile = function(file) {
	return arykow.mime.parseFromFile(file).then(function(mime) {
		return new Image(mime);
	});
};

exports.fromURI = function(uri) {
	return arykow.mime.parseFromURI(uri).then(function(mime) {
		return new Image(mime);
	});
};
