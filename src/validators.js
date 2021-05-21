
// Checks to see if all the cron string parameters have been provided
exports.hasValidNumberOfParameters = (parametersArray) => {
  if (parametersArray.length !== 6) {
    throw new Error('Six parameters are needed')
  }
}

exports.validateCronExpression = parametersArray => {
  parametersArray.forEach(element => {
    if (!/(^\*\/\d+$)|(^\d+-\d+\/\d+$)|(^\d+-\d+$)|(^\d+$)|^\*$/.test(element)) {
      throw new Error(`${element} is an invalid cron expression`)
    }
  })
}
