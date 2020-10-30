const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newarr = arr.slice();
    let result = [];
    let dn = '--discard-next';
    let dp = '--discard-prev';
    let don = '--double-next';
    let dop = '--double-prev';
    let el = false;

    newarr.forEach((e, i) => {
        switch (e) {
            case dp:
                if (i == 0) { return; }
                if (el === true) { el = false; return; }
                if (newarr[i - 2] === don) { result.pop(); return; }
                if (newarr[i - 2] === dn) { return; }
                if (newarr[i - 1] !== dp || dn || dop || don) {
                    result.pop();
                }

                break;
            case dn:
                el = true;

                if (i === newarr.length - 1) {
                    if (newarr[i + 1] !== dp || dn || dop || don) {
                        return;
                    }
                }
                break;
            case don:
                if (i !== newarr.length - 1) {
                    if (newarr[i + 1] !== dp || dn || dop || don) { result.push(newarr[i + 1]); }
                }
                break;
            case dop:
                if (el === true) { el = false; return; }
                if (newarr[i - 1] === dn) { return; }
                if (newarr[i - 2] === dn) { return; }
                if (newarr[i - 2] === dp) { result.push(newarr[i - 1]); return; }
                if (newarr[i - 2] === don) { result.push(newarr[i - 1]); return; }
                if (newarr[i - 2] === dop && newarr[i - 2] !== dn) { result.push(newarr[i - 1]); return; }

                if (i !== 0) {
                    if (newarr[i - 1] !== dp || dn || dop || don) { result.push(newarr[i - 1]); }
                }
                break;
            default:
                if (el === true) {
                    el = false;
                    return;
                }
                if (e !== dp || dn || dop || don) {
                    result.push(e);
                }
                break;

        }
    });
    return result;

}