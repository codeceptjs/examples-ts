const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './todomvc-tests/**/*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      waitForTimeout: 5000,
      waitForNavigation: 'networkidle0',
      waitForAction: 0,
      show: true,
    },

    REST: {},

    CustomHelper: {
      require: './todomvc-tests/helpers/custom.helper.ts'
    }
  },

  gherkin: {
    features: './todomvc-tests/features/*.feature',
    steps: [
      './todomvc-tests/step-definitions/create-todos.steps.ts'
    ]
  },

  include: {
    TodosPage: './todomvc-tests/pages/todos.page.ts'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}
