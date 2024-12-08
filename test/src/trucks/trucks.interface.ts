import { Document, ObjectId} from 'mongoose';

export interface Trucks extends Document {
  user: ObjectId;
  year: string;
  color: string;
  plates: string;
}