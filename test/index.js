import 'babel-polyfill';
import bindValueToRange from '../src';
import chai from 'chai';
chai.should();

function checker(value, expected, range = [ 0, 20 ]) {
  return bindValueToRange(value, ...range).should.equal(expected);
}
describe('bindValueToRange', () => {
  it('should restrict values to within the provided range', () => {
    checker(10, 10);
    checker(30, 20);
    checker(-5, 0);
    checker(2.2, 2, [ 0, 2 ]);
    // this is silly, but still
    checker(Math.random() * 132949, 1, [ 1, 1 ]);
  });
  it('should accept an array range', () => {
    bindValueToRange(40, [ 0, 10 ]).should.equal(10);
  });
  it('should correctly parse inverted bounds', () => {
    bindValueToRange(40, 10, 0).should.equal(10);
    bindValueToRange(-349, 40, -10).should.equal(-10);
  });
});
