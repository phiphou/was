export class Weather {
  constructor(
    public dt: string,
    public id: string,
    public icon: string,
    private temp: Object,
    public windSpeed: String,
    public windDir: String,
    public humidity: String,
    private _pressure: String) { }

  public get Temp(): Object {
    return this.temp;
  }

  public get pressure(): number {
    return Math.round(Number(this._pressure));
  }
}
