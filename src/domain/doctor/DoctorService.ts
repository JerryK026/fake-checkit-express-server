import Doctor from './entity/Doctor';

export default class DoctorService {
  // limit 추가되어야 함
  public async findDoctorList() {
    return await Doctor.find();
  }
}
