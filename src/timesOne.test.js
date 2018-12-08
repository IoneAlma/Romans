const transformNumbersToRomanOnes = require('./timesOne');


describe('transformNumbersToRomanOnes', () => {

    it('should return "I" instead of cardinal number', () => {
        const num = 3
        const transformedNum = transformNumbersToRomanOnes(num)
        expect(transformedNum).toBe('III');
    });

  });