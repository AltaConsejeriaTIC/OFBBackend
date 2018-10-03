'use strict';

const Model = require('../../config/wordpressDBConnection');


class Post extends Model{
	
	static get tableName(){
		return 'posts';
	}
	
	static get relationMappings(){
		
		return {
			event: {
				relation: Model.HasOneRelation,
				modelClass: __dirname + '/Event',
				join: {
					from: 'posts.id',
					to: 'mec_events.post_id'
				}
			}
		};
	}
}


module.exports = Post;