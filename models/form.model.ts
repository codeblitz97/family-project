import { Document, Schema, model, Model } from 'mongoose';

export interface FormData extends Document {
  name: string;
  dob: string;
  futureChoice: string;
  type: 'standard' | 'talent';
  bankNum: string;
  term: string;
  bankName: string;
  bankAccName: string;
  bankBranch: string;
  agreementName: string;
  signatureName: string;
  date: string;
}

const formModelSchema = new Schema<FormData>({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  term: { type: String, required: true },
  futureChoice: { type: String, required: true },
  type: { type: String, required: true },
  bankNum: { type: String, required: true },
  bankName: { type: String, required: true },
  bankAccName: { type: String, required: true },
  bankBranch: { type: String, required: true },
  agreementName: { type: String, required: true },
  signatureName: { type: String, required: true },
  date: { type: String, required: true },
});

let FormModel: Model<FormData>;

try {
  FormModel = model('formModel') as Model<FormData>;
} catch {
  FormModel = model<FormData>('formModel', formModelSchema);
}

export { FormModel };
