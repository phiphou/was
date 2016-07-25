export class Utils {

  static test(date: Date): number {
    return t3(date.getTime() / 2000);
  }

  private static t3(a) {
    return a - Math.floor(a / 360.0) * 360.0;
  }

  constructor() {
    throw new Error('Cannot new this class');
  }
}
