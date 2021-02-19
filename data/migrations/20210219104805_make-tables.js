const { table } = require("../dbConfig");

exports.up = function(knex) {
  return knex.schema.createTable("Projects", tbl => {
    tbl.increments("project_id")
    tbl.string("project_name").notNullable()
    tbl.string("project_description")
    tbl.boolean("project_completed").notNullable()
  })
    .createTable("Resources", tbl => {
      tbl.increments("resource_id")
      tbl.string("resource_name").notNullable().unique()
      tbl.string("resource_description")
    })
    .createTable("Tasks", tbl => {
      tbl.increments("task_id")
      tbl.string("task_description").notNullable()
      tbl.string("notes")
      tbl.boolean("task_completed").notNullable()
      tbl.integer("poject_id")
      .unsigned().notNullable().references("project_id").inTable("Projects")
    })
  // .createTable("project_resources")
};

exports.down = function(knex) {
  
};
