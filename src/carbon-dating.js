const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') { return false; }
    let numActivity = +sampleActivity;
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log2(MODERN_ACTIVITY / numActivity) / k;
    if (t < 1 || t == Infinity || isNaN(t)) { return false; }
    return t;
};