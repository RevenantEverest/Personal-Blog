const usersDB = require("../models/usersDB")

module.exports = {
  index(req, res, next) {
    usersDB
      .findAll()
      .then((users) => res.json({ message: "Getting Users", data: users }))
      .catch((err) => next(err))
  },
  getOne(req, res, next) {
    usersDB
      .findById(req.params.id)
      .then((user) => res.json({ message: "Getting User", data: user }))
      .catch((err) => next(err))
  },
  getByUsername(req, res, next) {
    usersDB
      .findByUsername(req.params.username)
      .then((user) => res.json({ message: "Getting user by username", data: user }))
      .catch((err) => next(err))
  },
  create(req, res, next) {
    usersDB
      .save(req.body)
      .then((user) => res.json({ message: "Adding User", data: user }))
      .catch((err) => next(err))
  },
  update(req, res, next) {
    usersDB
      .update(req.body)
      .then((user) => res.json({ message: "Updating User", data: user }))
      .catch((err) => next(err))
  },
  delete(req, res, next) {
    usersDB
      .delete(req.params.id)
      .then(() => res.json({ message: "User Deleted" }))
      .catch((err) => next(err))
  },
}
