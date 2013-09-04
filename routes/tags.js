
//Get the test page

function Tag() {}

Tag.prototype.addTag = function(req,res){
	var tag = req.params.tagname;
	if (!this.myTags) {
		this.myTags = {};
		this.myTags[tag] = { count: 1};
	}
	else 
		if (!this.myTags[tag])
			this.myTags[tag] = {count: 1};
		else
			this.myTags[tag].count++;


	res.send(200, 'Added ' + tag);
}

Tag.prototype.all = function(req,res)
{
	console.log('All tags function called');

	if (!this.myTags || this.myTags == {} )
		res.send(204,'No tags!');
	else
		res.send(200, this.myTags);
}

module.exports = Tag;