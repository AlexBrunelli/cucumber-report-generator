const REPORTPATH=process.env.PR
const JSONPATH=process.env.JD

const fs = require('fs')
const reporter = require('cucumber-html-reporter')


const options = {
    theme: 'bootstrap',
    jsonDir: JSONPATH,
    output: REPORTPATH,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options)
console.log('Report generated')
