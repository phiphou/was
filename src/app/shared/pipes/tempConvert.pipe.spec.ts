import {it, describe} from '@angular/core/testing';
import { BaseException } from '@angular/core/';
import { TempConvertPipe } from './tempConvert.pipe';

describe('TempConvertPipe', () => {

  let pipe: TempConvertPipe;

  beforeEach(() => {
    pipe = new TempConvertPipe();
  });

  it('should throw if not used with a number', () => {
    expect(() => pipe.transform(undefined)).toThrowError(BaseException, 'Requires a number as input');
    expect(() => pipe.transform(null)).toThrowError(BaseException, 'Requires a number as input');
  });

  it('should correctly convert celsius to farenheit degrees', () => {
    expect(pipe.transform(0, true)).toEqual(32);
    expect(pipe.transform(20, true)).toEqual(68);
    expect(pipe.transform(-10, true)).toEqual(14);
    expect(pipe.transform(0, false)).toEqual(0);
  });

  it('should let any random °C unchanged', () => {
    let random: number = Math.random();
    expect(pipe.transform(random)).toEqual(random);
    expect(pipe.transform(random, true)).not.toEqual(random);
  });
});
