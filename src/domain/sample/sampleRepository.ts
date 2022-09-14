import Sample from './entity/Sample';

export default class SampleRepository {
  private sample = {
    id: 1,
    name: 'dgt',
  };

  public findSample(): Promise<Sample> {
    return new Promise((resolve, reject) => {
      resolve(this.sample);
    });
  }
}
