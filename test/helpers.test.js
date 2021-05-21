const { arrrayRange, createRangeAndStepCalculator, createParser } = require('../src/helpers')

describe('arrrayRange', () => {
  it('should generate an array of min - max inclusive with a step of 1 by default', () => {
    // Arrange
    const expectedArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18,
      19, 20, 21, 22, 23, 24, 25, 26, 27,
      28, 29, 30, 31
    ]

    // Act
    const result = arrrayRange(1, 31)

    // Assert
    expect(result).toEqual(expectedArray)
  })

  it('should generate an array of min - max inclusive with a step when provided', () => {
    // Arrange
    const expectedArray = [
      0, 2, 4, 6, 8,
      10, 12, 14, 16, 18,
      20, 22, 24, 26,
      28, 30
    ]

    // Act
    const result = arrrayRange(0, 31, 2)

    // Assert
    expect(result).toEqual(expectedArray)
  })
})

describe('createRangeAndStepCalculator', () => {
  it('should return a function', () => {
    // Arrange
    const min = 0
    const max = 59

    // Act
    const calculator = createRangeAndStepCalculator(min, max)

    // Assert
    expect(calculator).toBeInstanceOf(Function)
  })

  it('should calculate the range properly for a given string', () => {
    // Arrange
    const min = 0
    const max = 59
    const cron = '0-10'

    // Act
    const calculator = createRangeAndStepCalculator(min, max)
    const result = calculator(cron)

    // Assert
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should calculate the range properly for a given string with a step', () => {
    // Arrange
    const min = 0
    const max = 59
    const cron = '0-10/3'

    // Act
    const calculator = createRangeAndStepCalculator(min, max)
    const result = calculator(cron)

    // Assert
    expect(result).toEqual([0, 3, 6, 9])
  })
})

describe('createParser', () => {
  it('should create a parser when called with appropriate parameters', () => {
    // Arrange
    const min = 0
    const max = 59

    // Act
    const parser = createParser(min, max)

    // Assert
    expect(parser).toBeInstanceOf(Function)
  })

  it('should create a parser that creates a valid output', () => {
    // Arrange
    const min = 0
    const max = 59
    const parameters = ['A5', '*/5', '2-10']
    const parser = createParser(min, max)

    // Act
    const result = parser(parameters)

    // Assert
    expect(result).toEqual('0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55')
  })
})
