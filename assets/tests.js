'use strict';

define("dummy/tests/helpers/ember-cli-clipboard", ["exports", "ember-cli-clipboard/test-support"], function (_exports, _testSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerSuccess = triggerSuccess;
  _exports.triggerError = triggerError;
  _exports.default = _default;

  const getOwnerFromContext = c => c.container || c.owner;
  /* === Legacy Integration Test Helpers === */

  /**
   * Fires `success` action for an instance of a copy-button component
   * @function triggerSuccess
   * @param {Object} context - integration test’s this context
   * @param {String} selector - css selector of the copy-button instance
   * @returns {Void}
   */


  function triggerSuccess(context, selector) {
    const owner = getOwnerFromContext(context);
    (0, _testSupport._fireComponentAction)(owner, selector, 'success');
  }
  /**
   * Fires `error` action for an instance of a copy-button component
   * @function triggerError
   * @param {Object} context - integration test’s this context
   * @param {String} selector - css selector of the copy-button instance
   * @returns {Void}
   */


  function triggerError(context, selector) {
    const owner = getOwnerFromContext(context);
    (0, _testSupport._fireComponentAction)(owner, selector, 'error');
  }
  /* === Register Legacy Acceptance Test Helpers === */


  function _default() {
    Ember.Test.registerAsyncHelper('triggerCopySuccess', function (app, selector) {
      const owner = app.__container__;
      (0, _testSupport._fireComponentAction)(owner, selector, 'success');
    });
    Ember.Test.registerAsyncHelper('triggerCopyError', function (app, selector) {
      const owner = app.__container__;
      (0, _testSupport._fireComponentAction)(owner, selector, 'error');
    });
  }
});
define("dummy/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, {
        until: '1.11.0',
        id: `ember-power-select-test-support-${name}`
      }));
      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("dummy/tests/integration/components/au-accordion-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-accordion', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuAccordion />
      */
      {
        "id": "DTtoJNpf",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-accordion\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuAccordion>
              template block text
            </AuAccordion>
          
      */
      {
        "id": "cz3fM5mG",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-accordion\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/au-alert-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuAlert />
      */
      {
        "id": "De0J9xy+",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-alert\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuAlert>
              template block text
            </AuAlert>
          
      */
      {
        "id": "8dcm49Vh",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-alert\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-badge-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-badge', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuBadge />
      */
      {
        "id": "ZrUE4aeP",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-badge\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuBadge @number=2/>
          
      */
      {
        "id": "dHGjVm6p",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-badge\",[],[[\"@number\"],[\"2\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('2');
    });
  });
});
define("dummy/tests/integration/components/au-body-container-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-body-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuBodyContainer />
      */
      {
        "id": "djB8ZVf/",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-body-container\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuBodyContainer>
              template block text
            </AuBodyContainer>
          
      */
      {
        "id": "vreKzBbx",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-body-container\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-brand-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-brand', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    /** @type {import("qunit-dom").test} */

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuBrand />
      */
      {
        "id": "4ThNq7eP",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-brand\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('Logo Vlaanderen Vlaanderen'); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuBrand @tagline="template block text"/>
          
      */
      {
        "id": "bir+4H5U",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-brand\",[],[[\"@tagline\"],[\"template block text\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).containsText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-button-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-button-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuButtonGroup />
      */
      {
        "id": "s5I8FYkE",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-button-group\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuButtonGroup>
              template block text
            </AuButtonGroup>
          
      */
      {
        "id": "DQrHuE1t",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-button-group\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuButton />
      */
      {
        "id": "tHFRapxA",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-button\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuButton>
              template block text
            </AuButton>
          
      */
      {
        "id": "0mMmHTD1",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-button\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-card-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    /** @type {import("qunit-dom").test} */

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuCard />
      */
      {
        "id": "lcTJJI0y",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-card\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuCard as |Card|>
              <Card.content>
                template block text
              </Card.content>
            </AuCard>
          
      */
      {
        "id": "mhYyjUQC",
        "block": "{\"symbols\":[\"Card\"],\"statements\":[[2,\"\\n      \"],[8,\"au-card\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"content\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          template block text\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-content-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-content-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuContentHeader />
      */
      {
        "id": "97keUlh5",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-content-header\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuContentHeader>
              template block text
            </AuContentHeader>
          
      */
      {
        "id": "HAmktf8B",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-content-header\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-content-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuContent />
      */
      {
        "id": "02ZTzIDJ",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-content\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuContent>
              template block text
            </AuContent>
          
      */
      {
        "id": "y6GUnEr4",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-content\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-control-checkbox-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-control-checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuControlCheckbox />
      */
      {
        "id": "S+VUGgFW",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-control-checkbox\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuControlCheckbox @label="template block text" />
          
      */
      {
        "id": "w0+QdaY/",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-control-checkbox\",[],[[\"@label\"],[\"template block text\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-control-radio-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-control-radio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuControlRadio />
      */
      {
        "id": "S+n8pir4",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-control-radio\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuControlRadio @label="template block text" />
          
      */
      {
        "id": "YOA1bIzW",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-control-radio\",[],[[\"@label\"],[\"template block text\"]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-data-table-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-data-table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuDataTable />
      */
      {
        "id": "NL6ESva5",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-data-table\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('No data');
    });
  });
});
define("dummy/tests/integration/components/au-date-picker-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  /** @type import("qunit-dom").module */
  (0, _qunit.module)('Integration | Component | au-date-picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuDatePicker />
      */
      {
        "id": "WXl9vHb6",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-date-picker\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).exists(); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuDatePicker @label="template block text">
              template block text
            </AuDatePicker>
          
      */
      {
        "id": "4rJBRJ11",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-date-picker\",[],[[\"@label\"],[\"template block text\"]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).containsText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-dropdown-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-dropdown', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuDropdown />
      */
      {
        "id": "F5pGDJzv",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-dropdown\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuDropdown>
              template block text
            </AuDropdown>
          
      */
      {
        "id": "HkpyQkZS",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-dropdown\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-heading-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-heading', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuHeading />
      */
      {
        "id": "S1FBtcyO",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-heading\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuHeading>
              template block text
            </AuHeading>
          
      */
      {
        "id": "dIVq14VT",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-heading\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-help-text-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-help-text', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuHelpText />
      */
      {
        "id": "Kuq+Edpd",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-help-text\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuHelpText>
              template block text
            </AuHelpText>
          
      */
      {
        "id": "3s1P10gl",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-help-text\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-hr-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-hr', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuHr />
      */
      {
        "id": "uv+umHg3",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-hr\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("dummy/tests/integration/components/au-icon-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-icon', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuIcon />
      */
      {
        "id": "TXbziuiN",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-icon\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("dummy/tests/integration/components/au-input-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-input', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuInput />
      */
      {
        "id": "znwAWXaF",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-input\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("dummy/tests/integration/components/au-label-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-label', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuLabel />
      */
      {
        "id": "2EsId7iL",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-label\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuLabel>
              template block text
            </AuLabel>
          
      */
      {
        "id": "8/zWJpK4",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-label\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-link-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuLink />
      */
      {
        "id": "xJ+1TwgU",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-link\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuLink>
              template block text
            </AuLink>
          
      */
      {
        "id": "slpaUFkq",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-link\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-loader-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-loader', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuLoader />
      */
      {
        "id": "sSp/OMfJ",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-loader\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('Aan het laden');
    });
  });
});
define("dummy/tests/integration/components/au-main-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-main-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuMainFooter />
      */
      {
        "id": "cSDXdZbO",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-main-footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('Logo Vlaanderen Vlaanderen verbeelding werkt'); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuMainFooter>
              template block text
            </AuMainFooter>
          
      */
      {
        "id": "EPV2RvF0",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-main-footer\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).containsText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-main-header-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-main-header', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuMainHeader />
      */
      {
        "id": "/kNkEGrn",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-main-header\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).containsText('Naar de hoofdinhoud'); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuMainHeader>
              template block text
            </AuMainHeader>
          
      */
      {
        "id": "4CKYDUcY",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-main-header\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).containsText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-modal-body-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-modal-body', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuModalBody />
      */
      {
        "id": "FptjzSEY",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-modal-body\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuModalBody>
              template block text
            </AuModalBody>
          
      */
      {
        "id": "02o+aVrM",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-modal-body\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-modal-footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-modal-footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuModalFooter />
      */
      {
        "id": "vnCMMLDl",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-modal-footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuModalFooter>
              template block text
            </AuModalFooter>
          
      */
      {
        "id": "aIjUu9kw",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-modal-footer\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-modal-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-modal', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuModal />
      */
      {
        "id": "Iexgz5By",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-modal\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuModal @modalOpen={{true}} as |Modal|>
              <Modal.Body>
                template block text
              </Modal.Body>
            </AuModal>
          
      */
      {
        "id": "J3NM9X/r",
        "block": "{\"symbols\":[\"Modal\"],\"statements\":[[2,\"\\n      \"],[8,\"au-modal\",[],[[\"@modalOpen\"],[true]],[[\"default\"],[{\"statements\":[[2,\"\\n        \"],[8,[32,1,[\"Body\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          template block text\\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"]],\"parameters\":[1]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      })); // the wormhole exists outside of the test dom,
      // so we explicitly pass in the document as rootelement here

      assert.dom("#ember-appuniversum-wormhole", document).containsText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-navigation-link-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-navigation-link', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuNavigationLink />
      */
      {
        "id": "k1QWZ6pS",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-navigation-link\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuNavigationLink>
              template block text
            </AuNavigationLink>
          
      */
      {
        "id": "ZVUAK56E",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-navigation-link\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-navigation-narrator-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-navigation-narrator', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuNavigationNarrator />
      */
      {
        "id": "Hrv0vesH",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-navigation-narrator\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).containsText('Nieuwe pagina');
    });
  });
});
define("dummy/tests/integration/components/au-pill-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-pill', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuPill />
      */
      {
        "id": "0Q2R0aTZ",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-pill\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuPill>
              template block text
            </AuPill>
          
      */
      {
        "id": "XS/FCPob",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-pill\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-textarea-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-textarea', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuTextarea />
      */
      {
        "id": "tYHJ5qfe",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-textarea\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('');
    });
  });
});
define("dummy/tests/integration/components/au-time-picker-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-time-picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuTimePicker />
      */
      {
        "id": "oSyK6trp",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-time-picker\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).exists();
    });
  });
});
define("dummy/tests/integration/components/au-toggle-switch-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-toggle-switch', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuToggleSwitch />
      */
      {
        "id": "1il8EOkO",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-toggle-switch\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuToggleSwitch>
              template block text
            </AuToggleSwitch>
          
      */
      {
        "id": "Tz35cbQ5",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-toggle-switch\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("dummy/tests/integration/components/au-toolbar-group-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-toolbar-group', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuToolbarGroup />
      */
      {
        "id": "dP+GxM27",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-toolbar-group\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuToolbarGroup>
              template block text
            </AuToolbarGroup>
          
      */
      {
        "id": "u4Nl/93+",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-toolbar-group\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/components/au-toolbar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | au-toolbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <AuToolbar />
      */
      {
        "id": "ntxKUqck",
        "block": "{\"symbols\":[],\"statements\":[[8,\"au-toolbar\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText(''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <AuToolbar>
              template block text
            </AuToolbar>
          
      */
      {
        "id": "X4SbPMcX",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"au-toolbar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('template block text');
    });
  });
});
define("dummy/tests/integration/helpers/format-time-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | format-time', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{format-time inputValue}}
      */
      {
        "id": "vHpx0/1T",
        "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[35,0]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"format-time\"]}",
        "meta": {}
      }));
      assert.dom(this.element).hasText('1234');
    });
  });
});
define("dummy/tests/integration/modifiers/on-click-inside-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Modifier | on-click-inside', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <div {{on-click-inside}}></div>
      */
      {
        "id": "WaEyxGSU",
        "block": "{\"symbols\":[],\"statements\":[[11,\"div\"],[4,[38,0],null,null],[12],[13]],\"hasEval\":false,\"upvars\":[\"on-click-inside\"]}",
        "meta": {}
      }));
      assert.ok(true);
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
