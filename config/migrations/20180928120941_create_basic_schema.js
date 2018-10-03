
exports.up = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.
		createTable('citizens', table => {
			table.increments('citizen_id').primary().unique();
			table.string('citizen_document').unique();
			table.string('citizen_email');
			table.string('citizen_name');
			table.string('citizen_cellphone');
		})
	]);
};

exports.down = function(knex, Promise) {
  
	return Promise.all([
		knex.schema.
		dropTable('citizens')
	]);
};