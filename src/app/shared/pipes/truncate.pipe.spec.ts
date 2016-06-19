import {it, describe} from '@angular/core/testing';
import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

  let pipe: TruncatePipe;
  let testString: string;
  beforeEach(() => {
    testString = 'Lorem ipsum dolor sit amet';
    pipe = new TruncatePipe();
  });

  it('should correctly truncate strings', () => {
    expect(pipe.transform(testString)).toEqual('Lorem ipsum dolor si...');
  });
  it('should work with Arguments', () => {
    expect(pipe.transform(testString, [5])).toEqual('Lorem...');
    expect(pipe.transform(testString, [5, '.'])).toEqual('Lorem.');
  });
});
