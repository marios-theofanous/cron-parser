const { hasValidNumberOfParameters, validateCronExpression } = require('../src/validators')

describe('hasValidNumberOfParameters', () => {
  it('should throw an error when number of parameters is invalid', () => {
    // Arrange
    const parameters = [1, 2, 3, 4, 5]

    // Act
    const toBeCalled = () => hasValidNumberOfParameters(parameters)

    // Assert
    expect(toBeCalled).toThrow()
  })

  it('should not throw an error when number of parameters is valid', () => {
    // Arrange
    const parameters = [1, 2, 3, 4, 5, 6]

    // Act
    const toBeCalled = () => hasValidNumberOfParameters(parameters)

    // Assert
    expect(toBeCalled).not.toThrow()
  })
})

describe('validateCronExpression', () => {
  test.each`
    a
    ${5} 
    ${'5-15/5'}
    ${'*'}
    ${51} 
    ${2005}
    ${'0-10/5'}
    `('does not throw an error for a valid cron expression', ({ a }) => {
    // Act
    const toBeCalled = () => validateCronExpression([a])

    // Assert
    expect(toBeCalled).not.toThrow()
  })

  test.each`
    a
    ${-1} 
    ${'A-15/5'}
    ${'ABC'}
    ${-20} 
    ${'**'}
    ${'op9'}
    `('does throw an error for an invalid cron expression', ({ a }) => {
    // Act
    const toBeCalled = () => validateCronExpression([a])

    // Assert
    expect(toBeCalled).toThrow()
  })
})
