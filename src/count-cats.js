const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
    let count = 0;
    let str = cats.flat();
    str.forEach((e) => {
        if (e === '^^') {
            count++;
        }
    });

    return count;
};