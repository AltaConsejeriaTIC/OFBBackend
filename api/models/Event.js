'use strict';

const Model = require('../../config/wordpressDBConnection');


class Event extends Model{
	
	static get tableName(){
		return 'mec_events';
	}
	
	static get relationMappings(){
		
		return {
			post: {
				relation: Model.BelongsToOneRelation,
				modelClass: __dirname + '/Post',
				join: {
					from: 'mec_events.post_id',
					to: 'posts.id'
				}
			}
		};
	}
}


module.exports = Event;