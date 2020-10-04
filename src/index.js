module.exports = function toReadable(number) {
    let units = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    let tens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];


    if (number < 20) {
        return units[number]
    } else if (number < 100) {
        return `${tens[Math.floor(number / 10)]}${units[number % 10] !== `zero` ? ` ${units[number % 10]}` : ``}`
    } else if (number < 1000) {
        let a = `${units[Math.floor(number / 100)]} hundred`
        if (number % 100 === 0) {
            return a;
        } else if (number % 100 !== 0 && number % 100 < 20) {
            a += ` ${units[number % 100]}`
        } else if (number % 100 !== 0 && number % 100 < 100) {
            a += ` ${tens[Math.floor((number % 100) / 10)]}${units[number % 10] !== `zero` ? ` ${units[number % 10]}` : ``}`
        }
        return a
    }
}
