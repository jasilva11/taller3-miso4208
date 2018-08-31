'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToFirstLoad extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.firstLoadTime')
            .then(firstLoadTime => {
                if (!firstLoadTime) {

                    throw new Error('Unable to find first load metrics in page');
                }
                return firstLoadTime;
            });
    }
}

module.exports = TimeToFirstLoad;