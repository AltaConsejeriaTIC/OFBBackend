
exports.up = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.createTable('answers', table => {
			table.primary(['answer_citizen', 'answer_question']);
			table.integer('answer_citizen').unsigned().notNullable();
			table.integer('answer_question').unsigned().notNullable();
			table.foreign('answer_citizen').references('citizen_id').inTable('citizens');
			table.foreign('answer_question').references('question_id').inTable('questions');
			table.string('answer_content');
			table.timestamp('answer_date').defaultTo(knex.fn.now());
		})
	]);
};

exports.down = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.dropTable('citizens')
	]);
};