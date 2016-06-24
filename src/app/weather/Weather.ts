export class Weather {
  constructor(
    public dt: string,
    public description: string,
    public icon: string,
    private temp: Object) { }

  public get Temp(): Object {
    return this.temp;
  }
}
