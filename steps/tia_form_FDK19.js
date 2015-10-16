/*global require, global */
/// Change to inherit from TIA_FORM_Generic
global.TIA_Form_FDK19 = function () {
	'use strict';
	var fs = require('fs');
	var webDriver = null; // get from some where relevalt
	var tiaFormApp = null;
	//TODO: Insert webDriver class

	this.selectRegNoField = function(){
		webDriver.enterKey("\r");
	};

	this.enterRegNo = function(reg_no){
		this.selectRegNoField();
		webDriver.enterKey(reg_no);
	};

	this.pressTab = function(){
		webDriver.enterKey("\t");
	};

	this.loadExample = function (fileName) {
		var	baseName = fileName && fileName.replace(/.md$/, ''),
			data = fs.readFileSync('test-data/' + baseName + '.md', 'utf-8'),
			match = data.match(/([\s\S]*)<!--OUTPUT([\s\S]*)-->/),
			input = match && match[1].trim(),
			output = match && match[2].trim(),
			inputLines = input && input.split('\n'),
			title = (inputLines && inputLines.length > 0 && inputLines[0].substring(1)) || baseName;

		return match && {
			title: title,
			input: input,
			output: output
		};
	};
	this.getExamples = function (folderName) {
		folderName = folderName || 'test-data/';
		return fs.readdirSync('./' + folderName).filter(function (item) {
			return /\.md$/.test(item);
		});
	};
};


