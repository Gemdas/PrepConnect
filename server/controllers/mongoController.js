const db = require("../models");
module.exports = {
	findAll: function(req, res){
		db[req.params.collection]
		.find(req.query)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
	findById: function(req, res){
		db[req.params.collection]
		.findById(req.params.id)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		db[req.params.collection]
		.create(req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		db[req.params.collection]
		.findOneAndUpdate({ _id: req.params.id}, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		db[req.params.collection]
		.findById({ _id: req.params.id })
		.then(dbModel => dbModel.remove())
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	},
}