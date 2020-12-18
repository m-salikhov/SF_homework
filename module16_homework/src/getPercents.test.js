import { getPercents } from './getPercents.js';
describe('tests for getPercents func', () => {
  let integerNumber = 200;
  let fractionalNumber = 7.97;
  it('operate corectly with integerNumber', () => {
    expect(getPercents(25, integerNumber)).toBe(50);
  });
  it('operate corectly with percent>100', () => {
    expect(getPercents(150, integerNumber)).toBe(300);
  });
  it('operate corectly with percent=100', () => {
    expect(getPercents(100, integerNumber)).toBe(+`${integerNumber}`);
  });
  it('operate corectly with fractionalNumber', () => {
    expect(getPercents(27, fractionalNumber)).toBe(
      (`${fractionalNumber}` / 100) * `${27}`
    );
  });
  it('operate corectly with fractionalNumber and percent=0', () => {
    expect(getPercents(0, fractionalNumber)).toBe(0);
  });
});
