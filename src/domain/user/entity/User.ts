import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  key: String,
  name: String,
});

export default mongoose.model('User', userSchema);
