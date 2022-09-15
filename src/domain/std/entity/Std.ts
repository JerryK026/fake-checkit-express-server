import mongoose from 'mongoose';
const { Schema } = mongoose;

const stdSchema = new Schema({
  doctor_id: String,
  address: String,
  address_code: String,
  store_address: String,
});

export default mongoose.model('User', stdSchema);
