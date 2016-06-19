import {ICity} from './ICity';

export class City implements ICity {
  constructor(
    public name?: string,
    public id?: number,
    private coord?: Object) { }

  private get lat(): number {
    return this.coord['lat'];
  }

  private get lon(): number {
    return this.coord['lon'];
  }

  get osm_link(): string {
    return `https://www.openstreetmap.org/#map=13/${this.lat}/${this.lon}`;
  }
}
