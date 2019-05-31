const db = require("../models");
// const util = require('util')


// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Music
      .find()
      .then(dbModel => {res
        // .setHeader('If-None-Match', "*")
        .json(dbModel)
    })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Music
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByMood: function(req, res) {
    console.log(req.params);
    db.Music
      .find(req.params)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByStyle: function(req, res) {
    console.log(req.params);
    db.Music
      .find({"$**": {$style: req.params}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByStyleAndMood: function(req, res) {
    console.log(req.params);
    db.Music
      .find({"$**": {$style: req.params, $mood: req.params}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTempo: function(req, res) {
    console.log('controller working');
    console.log(req.params);
    db.Music
      .find({"$**": {$style: req.params,$mood: req.params}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Music
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Music
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Music
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
