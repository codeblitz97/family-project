import { NextApiRequest, NextApiResponse } from 'next';
import { FormModel, FormData } from '@/models/form.model';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = req.body;

      const newFormEntry = new FormModel(formData);
      const savedFormEntry = await newFormEntry.save();

      res.status(201).json({ success: true, data: savedFormEntry });
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
