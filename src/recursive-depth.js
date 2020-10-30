const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    constructor() {
        this.count = 1;
        this.deep = 1;
    }
    calculateDepth(arr) {
        let count = 1;
        let deep = 0;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                count = this.calculateDepth(arr[i]);
                deep = Math.max(deep, count);
            }
        }
        deep++;
        return deep;
    }
}