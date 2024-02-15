import { connect } from '@/database/mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
connect();
import { FormModel } from '@/models/form.model';

export default async function getForms(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await FormModel.find({}).exec();
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
}
