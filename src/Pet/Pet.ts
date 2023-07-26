import mongoose, { Schema, ObjectId } from 'mongoose';

export interface InterfacePet {
  _id: ObjectId;
  name: string;
  species: string;
  carry: string;
  weight: string;
  date_of_birth: string;
  tutor: Schema.Types.ObjectId;
}

const PetSchema = new Schema<InterfacePet>({
  name: { type: String, required: true },
  species: { type: String, required: true },
  carry: { type: String, required: true },
  weight: { type: String, required: true },
  date_of_birth: { type: String, required: true },
  tutor: { type: Schema.Types.ObjectId, required: true },
});

export const Pet = mongoose.model<InterfacePet>('Pet', PetSchema);
