import SampleRepository from './sampleRepository';

const sampleRepository = new SampleRepository();

export default class SampleService {
  public async getSample() {
    return await sampleRepository.findSample();
  }
}
