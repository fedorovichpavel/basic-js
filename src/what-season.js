const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (!date) { return 'Unable to determine the time of year!'; }
    if (isNaN(date.getTime())) { throw new Error("THROWN"); }
    let month = date.getMonth();
    const season = (month) => {
        if ([0, 1, 11].includes(month)) { return 'winter'; } else if ([2, 3, 4].includes(month)) { return 'spring'; } else if ([5, 6, 7].includes(month)) { return 'summer'; } else if ([8, 9, 10].includes(month)) { return 'autumn'; }
    }
    return season(month);

};