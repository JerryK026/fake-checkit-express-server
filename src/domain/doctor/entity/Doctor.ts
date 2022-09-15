import mongoose from 'mongoose';
const { Schema } = mongoose;

const doctorSchema = new Schema({
  doctor_id: String,
  available_hours: String,
  available_weekday: String,
  description: String,
  doctor_display_name: String,
  doctor_image_url: String,
  doctor_images: [String],
  doctor_tel: String,
  hospital_addr: String,
  hospital_name: String,
  lab_addr: String,
  lab_name: String,
  lab_postal_code: String,
  lab_receiver_name: String,
  lab_tel: String,
  lat: String,
  lng: String,
  professional_statement: String,
  subjects: String,
});

export default mongoose.model('Doctor', doctorSchema);
