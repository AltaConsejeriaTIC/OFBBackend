
exports.up = function(knex, Promise) {
	
	return Promise.all([
		knex.schema.createTable('questions', table => {
			table.increments('question_id').primary().unique();
			table.string('question_content');
			table.timestamp('question_published').defaultTo(knex.fn.now());
			table.date('question_start_date');
			table.date('question_end_date');
			table.string('question_answer');
		})
	]);
};

exports.down = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.dropTable('questions')
	]);
};