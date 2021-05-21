const { createParser } = require('./helpers')

exports.minuteParser = createParser(0, 59)
exports.hourParser = createParser(0, 23)
exports.dayMonthParser = createParser(1, 31)
exports.monthParser = createParser(1, 12)
exports.dayWeekParser = createParser(0, 6)
