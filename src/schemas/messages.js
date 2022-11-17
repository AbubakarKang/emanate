const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
	message: String,
	dateSent: {
		type: Date,
		default: new Date(),
	},
});

module.exports = mongoose.model("Message", messageSchema);
