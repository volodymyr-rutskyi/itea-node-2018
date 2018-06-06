function fac(num) {

    if (isNaN(num)) return NaN;

    if (num <= 1) return 1;

    return num * fac(num - 1);
}



module.exports = fac;