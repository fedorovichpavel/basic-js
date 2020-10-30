const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (str === null) { str = 'null'; }
    let newstr = [];
    newstr.push(str);
    if (options.addition === null) { options.addition = 'null'; }
    let opt = {
        repeatTimes: options.repeatTimes ? options.repeatTimes : 1,
        separator: options.separator ? options.separator : '+',
        addition: options.addition !== undefined ? options.addition.toString() : '',
        additionRepeatTimes: options.additionRepeatTimes ? options.additionRepeatTimes : 1,
        additionSeparator: options.additionSeparator ? options.additionSeparator : '|'
    }
    const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = opt;


    let add = [];
    if (additionRepeatTimes > 1) {
        for (let i = 1; i <= additionRepeatTimes; i++) {
            add.push(addition);
            if (i !== additionRepeatTimes) { add.push(additionSeparator); }
        }

    } else { add.push(addition); }

    newstr = newstr.concat(add).join('');

    let res = [];
    res.push(newstr);
    res = res[0];

    let result = [];

    if (repeatTimes > 1) {
        for (let i = 1; i <= repeatTimes; i++) {
            result.push(res);
            if (i !== repeatTimes) { result.push(separator); }
        }

    } else { result.push(res); }

    return result.join('');
};