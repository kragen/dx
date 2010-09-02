Disco Explorer
==============

Disco Explorer is a simple DHTML program to maintain a backup of your
historical Facebook data in your browser, search it, and export it in
JSON.  This allows you to “explore” your Facebook history, even while
“disco“nnected from Facebook.

Originally, it was hosted on <http://knx.to/dc/>, but that site has
been acquired by Google, who have shut it down.  Shortly I will
attempt to get my own API key that I can use to set up a new demo
site.

Making it work
--------------

Unfortunately, the way Facebook apps work, their application keys are
locked to a domain name, so you can’t just unpack this on a directory
on your own web server and have it work.  You have to do one of the
following:

### Get your own Facebook API key ###

This involves signing up as a developer with Facebook.  Once you have
it, stick it in `index.html` on the line that says:

    var knx_fb_api_key = "2a2806da8abe66693e14bbbcbe9c0c64";

in place of `2a2806da8abe66693e14bbbcbe9c0c64`.

Then put the files on your web server and you should be good to go.

### Fake out knx.to ###

I tried making my machine pretend to be knx.to, but it looks like the
API key has been revoked, as well.

Contact
-------

Email me at <mailto:kragen@canonical.org> if this doesn’t work.  Best
to mention my name (Kragen Sitaker) in the mail or it will probably
get filed with my spam.

