Backbone-PHP-Feeds
==================

Just a basic backbone app to handle twitter, flickr and instagram feeds. Uses PHP to create a cache file, then looks at that. You'll need an /inc/keys.php file with the various auth/keys/tokens/certificats/secret-hand-shakes from the providers.


**Note**

You may need to create /inc/cache/ and make that folder writeable by your php/web etc process. A service-cache json file will be created.

**Another Note**

This is by no means perfect, and if flickr or twitter is crucial to your site you might want to think about server-siding all this stuff.

**Yet Another Note**

This doesn't currently work with the "quote tweet" function. Looking into the twitter api now to see how to appropriately display.
