export class Settings {
  static instance: Settings;
  static isCreating: Boolean = false;
  private _isTimeToRefesh: boolean = false;

  static getInstance() {
    if (Settings.instance == null) {
      Settings.isCreating = true;
      Settings.instance = new Settings();
      Settings.isCreating = false;
    }
    return Settings.instance;
  }

  constructor() {
    if (!Settings.isCreating) {
      throw new Error("You can't call new in Singleton instances! Call Settings.getInstance() instead.");
    }
  }

  setIsTimeToRefesh(value: boolean) {
    this._isTimeToRefesh = value;
  }

  isTimeToRefesh() {
    return this._isTimeToRefesh;
  }

}
