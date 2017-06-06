var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	note: {
		type: Schema.Types.ObjectID,
		ref: 'Note'
	}
});

var Listing = mongoose.model('Article', ArticleSchema);

module.exports = Listing;