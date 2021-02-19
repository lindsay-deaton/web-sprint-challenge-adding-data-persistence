
exports.seed = function(knex, Promise) {
      return knex('Projects').insert([
        { project_name: 'Sprint Challenge', project_description: 'Unit4, week2', project_completed: 'true' },
        { project_name: 'Interview', project_description: 'over Unit1-4', project_completed: 'false' },
        {project_name: 'Sprint Retrospectives', project_description: 'Unit4, week2', project_completed: 'false'}
      ]);
};
