import { NextResponse } from 'next/server';

import axios from 'axios';
import { z } from 'zod';

import ENV from '@/utils/env';
import mongoClientPromise from '@/utils/mongo';

const POST_BODY_SCHEMA = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  businessName: z.string().nullable(),

  telephoneNumber: z.string().regex(/^[0-9]*$/),
  emailAddress: z.string().email(),

  company: z.string().nonempty().max(512),
  message: z.string().nonempty().max(2048),
});

export type ContactFormBody = z.infer<typeof POST_BODY_SCHEMA>;

export async function POST(req: Request) {
  const mongo = await mongoClientPromise;
  const db = mongo.db('wholesale');

  const safelyParsedBody = POST_BODY_SCHEMA.safeParse(await req.json());

  if (!safelyParsedBody.success) {
    return NextResponse.json(
      { success: false, errors: safelyParsedBody.error },
      { status: 400 }
    );
  }

  const {
    firstName,
    lastName,
    businessName,
    telephoneNumber,
    emailAddress,
    company,
    message,
  } = safelyParsedBody.data;

  await db.collection('contact').insertOne({
    firstName,
    lastName,
    telephoneNumber,
    emailAddress,
    company,
    message,
  });

  await axios.post(ENV.BACKEND_API_URL + '/contact_form', {
    project_id: 'ae61ba86-7953-4a24-8b35-24ee0d1e1e72',
    first_name: firstName,
    last_name: lastName,
    email: emailAddress,
    phone_number: telephoneNumber,
    business_name: businessName || false,
    user_message: message,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
