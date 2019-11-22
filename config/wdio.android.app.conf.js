const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============
config.specs = [
    './test/specs/**/app*.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        deviceName: 'Huawei',
        platformVersion: '8',
        automationName: 'UiAutomator2',
        appPackage: 'app.naked_pos.stg',
        appActivity: 'app.scrap_pos.ui.setting.ChooseModeActivity',
        noReset: true,
        newCommandTimeout: 2400,
    },
];

exports.config = config;
