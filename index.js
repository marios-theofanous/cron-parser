#!/usr/bin/env node
const cronString = process.argv[2] // First two args are not the command line arguments

const { splitCronString, splitCronList } = require('./src/helpers')
const { hasValidNumberOfParameters, validateCronExpression } = require('./src/validators')
const { minuteParser, hourParser, dayMonthParser, dayWeekParser, monthParser } = require('./src/parsers')

const parameters = splitCronString(cronString)
// const parameters = splitCronString('* 6-15/5 * * * /usr/bin/find')

// Check to see the user has provided the correct number parameters
hasValidNumberOfParameters(parameters)

// For each cron parameter create an array based on the list separator ","
const splitParametersArray = parameters.map(element => {
  return splitCronList(element)
})

splitParametersArray.slice(0, 4).forEach(element => {
  validateCronExpression(element)
})

console.log(splitParametersArray.slice(0, 4))

// cron string structure = minute hour day(month) month day(week)
const minutesArray = minuteParser(splitParametersArray[0])
const hoursArray = hourParser(splitParametersArray[1])
const dayMonthArray = dayMonthParser(splitParametersArray[2])
const monthArray = monthParser(splitParametersArray[3])
const dayWeekArray = dayWeekParser(splitParametersArray[4])
const commandToRun = splitParametersArray[5][0]

console.log('minute       ', minutesArray.join(' '))
console.log('hours        ', hoursArray.join(' '))
console.log('day of month ', dayMonthArray.join(' '))
console.log('month        ', monthArray.join(' '))
console.log('day of week  ', dayWeekArray.join(' '))
console.log('command      ', commandToRun)
