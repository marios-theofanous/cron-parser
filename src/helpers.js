exports.splitCronList = (parameter) => parameter.split(',')

exports.splitCronString = (cronString) => cronString.split(' ')

exports.arrrayRange = (start, end, step = 1) => Array(Math.ceil((end - start) / step) + 1).fill(start).map((x, y) => Number(x) + y * step).filter(x => x <= end)

exports.createRangeAndStepCalculator = (min, max) => el => {
  const stepRegex = /(?<start>\d+)-(?<end>\d+)\/(?<step>\d+)/
  const stepFound = el.match(stepRegex)

  const rangeRegex = /(?<start>\d+)-(?<end>\d+)/
  const rangeFound = el.match(rangeRegex)

  if (stepFound) { // If there is a step found create the necessary range and then filter out the non-step values
    const { start, end, step } = stepFound.groups
    // TODO add validation for min and max value

    return this.arrrayRange(start, end, step)
  } else if (rangeFound) { // If it is a range calculate all the values within it
    const { start, end } = rangeFound.groups
    // TODO add validation for min and max value

    return this.arrrayRange(start, end)
  } else { // It's a number return it
    return Number(el)
  }
}

exports.createParser = (min, max) => (parameters) => {
  const calculator = this.createRangeAndStepCalculator(min, max)
  const array =
        parameters
          .map(val => { return val.replace('*', `${min}-${max}`) })
          .flatMap(calculator)
          .sort((a, b) => a - b)

  // Remove duplicates
  return [...new Set(array)]
}
