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
  return db("resources")
};

function getById(id) {
  return db("resources")
    .where({ id })
    .first();
}

function insert(resources) {
  return db("resources")
    .insert(resources)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("resources")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("resources")
    .where('id', id)
    .del()
}