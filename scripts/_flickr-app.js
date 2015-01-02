// MODELS

Photos = Backbone.Model.extend({});

PhotosCollection = Backbone.Collection.extend({
    model:Photos,
    url:"/inc/flickr.php"
});

photos = new PhotosCollection([
], { mode: "client" });

// VIEWS

PhotosView = Backbone.View.extend({		
	className: 'flickrPhotos',

	template: Handlebars.compile($("#app-flickr").html()),

    initialize:function (e) {
		this.listenTo(this.collection,'reset', this.renderList);
    },

	renderList : function(photos){
		
		var flickrPhotos = photos.models[0].attributes.photos.photo;

        _.each(flickrPhotos, function (flickrPhoto) {
            $(this.el).append(this.template(flickrPhoto));
        }, this);
		
		return this;
		
        _.each(photos.photo, function (photos) {
			console.log("photo");
            $(this.el).append(this.template(photos.photo));
        }, this);
		
		return this;
	},
});

allPhotos = PhotosView.extend({ });

Handlebars.registerHelper('dateFormat', function(tweetDate) {
	//return moment(tweetDate, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').format("MMM DD, YYYY hh:mm:ss A");
	return moment(tweetDate, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en').fromNow();
});