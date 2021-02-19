exports.seed = function(knex, Promise) {
      return knex('Resources').insert([
        { resource_name: "Canvas", resource_description: 'canvas.instructure.lambda' },
        { resource_name: "Google Doc", resource_description: 'Interview sprint questions' },
        { resource_name: "Unit4sp2gp1", resource_description: 'week 2 monday class project' },
        { resource_name: "Unit4sp2gp2", resource_description: 'week 2 tuesday class project' },
        { resource_name: "Unit4sp2gp3", resource_description: 'week 2 wednesday class project' },
        {resource_name: "Unit4sp2gp4", resource_description: 'week 2 thursday class project'}
      ]);
};
