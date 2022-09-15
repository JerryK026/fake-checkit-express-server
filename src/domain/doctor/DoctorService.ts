import Doctor from './entity/Doctor';

export default class DoctorService {
  // limit 추가되어야 함
  public async findDoctorList() {
    return await Doctor.find();
  }

  public async findByDoctorId(_id: string) {
    return await Doctor.findById({ _id });
  }
}
