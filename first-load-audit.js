'use strict';

const Audit = require('lighthouse').Audit;

const MAX_LOAD_TIME = 3000;

class FirstLoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'first-load-audit',
            description: 'First load ready',
            failureDescription: 'First load slow to initialize',
            helpText: 'Used to measure time from navigationStart to when the first load' +
            ' is ready.',

            requiredArtifacts: ['TimeToFirstLoad']
        };
    }

    static audit(artifacts) {
        const loadedTime = artifacts.TimeToFirstLoad;

        const belowThreshold = loadedTime <= MAX_LOAD_TIME;

        return {
            rawValue: loadedTime,
            score: belowThreshold
        };
    }
}

module.exports = FirstLoadAudit;