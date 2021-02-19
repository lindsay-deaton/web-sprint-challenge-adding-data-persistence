// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("projects")
};

function getById(id) {
  return db("projects")
    .where( "project_id", id )
    .first();
}

function insert(projects) {
  return db("projects")
    .insert(projects)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("projects")
    .where('id', id)
    .del();
}