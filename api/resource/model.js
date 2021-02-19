// build your `Resource` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("resource")
};

function getById(id) {
  return db("resource")
    .where({ id })
    .first();
}

function insert(resource) {
  return db("resource")
    .insert(resource)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("resource")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("resource")
    .where('id', id)
    .del();