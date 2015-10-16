/*global require, global */

global.TIA_Forms_App = function () {
	'use strict';
	var fs = require('fs');
	var webDriver = null,
		isTIAOpenAndActive = false,
		status = "initial",
		strTIAFormsUrl = "", //somthing like http://tia07:8080/frmsrv?env=DK01T6462
		activeFormsName = null,
		activeFormsObject = null;
	//TODO: Insert webDriver class

	this.openApp = function(url_tia_forms_app){
		this.strTIAFormsUrl = url_tia_forms_app;
		//check for 404
		//check for if the HTML contains "forms object ??"
		//wait for Trace to say that it is ok? 
	};

	this.openForm = function(form_name){
		/* it should 
			- check of a JS Form function exists i.e. TIA_Form_<form_name> e.g. TIA_Form_FDK19 
			- using the webdriver, open TIA if not already open
			- using the webdriver, and the menu system, open form 8040 and enter the form_name in the 
			- using the webdriver, tab and press enter*/
		if(!this.isTIAOpenAndActive){
			console.error("TIA IS NOT OPEN - call openApp() with the correct URL");
			//verify that it works
			//check trace?
		}
		webDriver.sendKeys("8040");
		TIA_Form_Generic.pressEnter();
		TIA_Form_Generic.pressTab();
		TIA_Form_Generic.pressEnter();
		webDriver.sendKeys(form_name);
		// check trace
		if(trace_ok){
			this.activeFormsName = form_name;
			//this.activeFormsObject = ??;
		}
		// Return the form
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


