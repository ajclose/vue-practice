// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.new-task')
      .assert.elementPresent('button[name=addTask]')
      .assert.elementPresent('.pending')
      .assert.elementPresent('.completed')
      .assert.containsText('.pending > h2', 'Pending')
      .assert.containsText('.completed > h2', 'Completed')
      .assert.elementCount('.pending-task', 2)
      .assert.elementCount('.completed-task', 2)
      .setValue('input[type=text]', 'new task')
      .click('button[name=addTask]')
      .pause(1000)
      .assert.elementCount('.pending-task', 3)
      .assert.containsText('.pending', 'new task')
      .click('.pending-task .check')
      .pause(1000)
      .assert.elementCount('.pending-task', 2)
      .assert.elementCount('.completed-task', 3)
      .click('.pending-task .delete')
      .pause(1000)
      .dismissAlert()
      .assert.elementCount('.pending-task', 2)
      .click('.pending-task .delete')
      .pause(1000)
      .acceptAlert()
      .assert.elementCount('.pending-task', 1)
      .click('.completed-task .undo')
      .pause(1000)
      .assert.elementCount('.pending-task', 2)
      .assert.elementCount('.completed-task', 2)
      .click('.completed-task .delete')
      .pause(1000)
      .dismissAlert()
      .assert.elementCount('.completed-task', 2)
      .click('.completed-task .delete')
      .pause(1000)
      .acceptAlert()
      .assert.elementCount('.completed-task', 1)
      .setValue('input[type=text]', '')
      .click('button[name=addTask]')
      .acceptAlert()
      .assert.elementCount('.pending-task', 2)
      .click('.completed-task .delete')
      .acceptAlert()
      .assert.elementNotPresent('.completed')
      .click('.pending-task .delete')
      .acceptAlert()
      .click('.pending-task .delete')
      .acceptAlert()
      .assert.elementNotPresent('.pending')
      .end()
  }
}
