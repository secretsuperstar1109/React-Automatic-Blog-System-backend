const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
	post_date: {
		type: String,
		required: true,
	},
	contributor: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	title_character: {
		type: String,
		required: true,
	},
	coupon: {
		type: String,
	},
	signature: {
		type: String,
	},
	uploadImage: {
		type: String,
	},
	post_text: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
