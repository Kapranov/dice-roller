# DiceRoller

### Testing

![testing](/ember_test.png "ember test")

## Install PhantomJS

```sh
npm cache clean --force

PHANTOM_JS="phantomjs-2.1.1-linux-x86_64"

cd /tmp

wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
tar -xvjf $PHANTOM_JS.tar.bz2
mv $PHANTOM_JS /usr/local/share
ln -s /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin
phantomjs --version
```
### May 2018 by Oleg G.kapranov

[1]: https://github.com/sazzer/dice-roller
[2]: https://github.com/YanaNeronskaya/dice-roller
[3]: https://www.sitepoint.com/ember-js-perfect-framework-web-applications/
[4]: https://habr.com/company/ruvds/blog/341076/
[5]: https://github.com/broerse/ember-cli-blog
[6]: https://bloggr.exmer.com/posts
[7]: https://medium.com/peep-stack/building-a-performant-real-time-web-app-with-ember-fastboot-and-phoenix-part-4-93118e278c68
[8]: https://www.emberscreencasts.com/
[9]: https://www.emberscreencasts.com/posts/175-shopping-cart-part-2-persistence-with-localstorage
[10]: http://ideabuster.jayantbhawal.in/getting-started-with-ember-js-2-firebase-materialize-css/
[11]: https://emberigniter.com/send-closure-actions-up-data-owner/
[12]: https://github.com/emberjs/rfcs/blob/master/text/0050-improved-actions.md
[13]: https://github.com/DockYard/ember-route-action-helper
