import { Document} from 'mongoose';

export interface Users extends Document {
  email: string;
  password: string;
}
