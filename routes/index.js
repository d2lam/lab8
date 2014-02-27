var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var gridtf = {'grid': false, 'projects' : projects};
  	res.render('index', gridtf);
};

exports.viewGrid = function(req, res){
	var gridtf = {'grid': true, 'projects' : projects};
  	res.render('index', gridtf);
};