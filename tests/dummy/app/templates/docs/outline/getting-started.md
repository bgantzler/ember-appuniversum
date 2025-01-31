# Getting started

---

## Installation

You can install the [ember-appuniversum](https://www.npmjs.com/package/@appuniversum/ember-appuniversum) addon with ember-cli:

`ember install @appuniversum/ember-appuniversum`

## Set up the build pipeline

### SCSS

`ember-appuniversum` uses SCSS so you will need to add a SCSS compiler to your project. This can be done by installing [ember-cli-sass](https://www.npmjs.com/package/ember-cli-sass).

### Autoprefixer
`ember-appuniversum` doesn't use any CSS vendor prefixes in its code and it depends on `autoprefixer` to add those when needed. Make sure to set up autoprefixer in your project.

The easiest way to do this in an ember project is by installing the [`ember-cli-autoprefixer` addon](https://github.com/kimroen/ember-cli-autoprefixer).

## Customising the SCSS for your project

Add the following to your `ember-cli-build.js` file:

``` js
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/@appuniversum/appuniversum',
        'node_modules/@appuniversum/ember-appuniversum/app/styles'
      ]
    }
  });

  return app.toTree();
};
```

Then load the SCSS partials in your `app.scss` file:

``` js
/* ==================================
   #APPUNIVERSUM
   ================================== */

/**
 * A design universe for Flanders GOV applications
 */

/**
 * CONTENTS
 * ---
 * SETTINGS: Project settings and variables
 * TOOLS: Mixins
 * GENERIC: Reset, global box-sizing and font-styles
 * ELEMENTS: Plain html tag styling
 * OBJECTS: OOCSS unstyled objects (namespace: '.au-o-...')
 * COMPONENTS: Components (namespace: '.au-c-...')
 * UTILITIES: Single function helper classes (namespace: '.au-u-...')
 */


// VARIABLES
@import "appuniversum/s-colors.scss";
@import "appuniversum/s-global";
@import "appuniversum/s-utilities";


// MIXINS
@import "appuniversum/t-font-size";
@import "appuniversum/t-sass-mq";


// GENERIC
@import "appuniversum/g-reset";
@import "appuniversum/g-box-sizing";
@import "appuniversum/g-font";


// ELEMENTS
@import "appuniversum/e-page";


// OBJECTS
@import "appuniversum/o-box";
@import "appuniversum/o-flow";
@import "appuniversum/o-grid";
@import "appuniversum/o-layout";
@import "appuniversum/o-region";


// COMPONENTS
@import "ember-appuniversum/c-alert";
@import "ember-appuniversum/c-badge";
@import "ember-appuniversum/c-body-container";
@import "ember-appuniversum/c-brand";
@import "ember-appuniversum/c-button";
@import "ember-appuniversum/c-button-group";
@import "ember-appuniversum/c-card";
@import "ember-appuniversum/c-content";
@import "ember-appuniversum/c-content-header";
@import "ember-appuniversum/c-control";
@import "ember-appuniversum/c-data-table";
@import "ember-appuniversum/c-dropdown";
@import "ember-appuniversum/c-form";
@import "ember-appuniversum/c-heading";
@import "ember-appuniversum/c-help-text";
@import "ember-appuniversum/c-hr";
@import "ember-appuniversum/c-icon";
@import "ember-appuniversum/c-input";
@import "ember-appuniversum/c-label";
@import "ember-appuniversum/c-link";
@import "ember-appuniversum/c-list-horizontal";
@import "ember-appuniversum/c-list-navigation";
@import "ember-appuniversum/c-loader";
@import "ember-appuniversum/c-pagination";
@import "ember-appuniversum/c-pill";
@import "ember-appuniversum/c-main-container";
@import "ember-appuniversum/c-main-header";
@import "ember-appuniversum/c-main-footer";
@import "ember-appuniversum/c-modal";
@import "ember-appuniversum/c-sidebar";
@import "ember-appuniversum/c-sidebar-action";
@import "ember-appuniversum/c-textarea";
@import "ember-appuniversum/c-toolbar";
@import "ember-appuniversum/c-toggle-switch";


// PLUGINS
@import "ember-appuniversum/p-ember-power-select";
@import "ember-appuniversum/p-duet-datepicker";


// UTILITIES
@import "appuniversum/u-align-text";
@import "appuniversum/u-break-word";
@import "appuniversum/u-headings";
@import "appuniversum/u-hide";
@import "appuniversum/u-font-family";
@import "appuniversum/u-font-weights";
@import "appuniversum/u-paragraphs";
@import "appuniversum/u-print";
@import "appuniversum/u-responsive-spacings";
@import "appuniversum/u-spacings";
@import "appuniversum/u-visible";
@import "appuniversum/u-widths";

```
