import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface InterfaceTutor {
  name: string;
  password: string;
  phone: string;
  email: string;
  date_of_birth: String;
  zip_code: string;
  pets: Schema.Types.ObjectId[];
  comparePassword(password: any);
}

const TutorSchema = new Schema<InterfaceTutor>({
  name: {
    type: String,
    required: [true, 'Please provide name'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  date_of_birth: {
    type: String,
    required: [true, 'Please provide date of birth'],
  },
  zip_code: {
    type: String,
    required: [true, 'Please provide zip code'],
  },
  pets: [{ type: Schema.Types.ObjectId, ref: 'Pet' }],
});


TutorSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

TutorSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};
export const Tutor = mongoose.model<InterfaceTutor>('Tutor', TutorSchema);
