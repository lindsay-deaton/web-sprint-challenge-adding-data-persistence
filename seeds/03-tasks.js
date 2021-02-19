
exports.seed = function(knex, Promise) {
  return knex('Tasks')
  .insert([
        { task_description: "Study", notes: 'for Sprint', task_completed: "true", project_id: 1 },
        { task_description: "Study", notes: 'for Interview', task_completed: "false", project_id: 2 },
        { task_description: "Schedule Interview", notes: 'for week 4, unit 4', task_completed: "true", project_id: 2 },
        {task_description: "review module warm-up material", notes: 'for Sprint', task_completed: "true", project_id: 3},
      ]);
};
