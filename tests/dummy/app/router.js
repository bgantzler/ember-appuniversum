import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route("atoms", function() {
      this.route('au-icon');
      this.route("au-button");
      this.route('au-input');
      this.route("au-navigation-link");
      this.route('au-textarea');
    });

    this.route("components", function() {
      this.route("au-alert");
      this.route("au-popover");
    });

    this.route("patterns", function() {
      this.route("au-header");
    });

    this.route("index");
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;