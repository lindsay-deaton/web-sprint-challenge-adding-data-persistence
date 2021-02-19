// build your `Task` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("task")
};

function getById(id) {
  return db("task")
    .where({ id })
    .first();
}

function insert(task) {
  return db("task")
    .insert(task)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("task")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("task")
    .where('id', id)
    .del();