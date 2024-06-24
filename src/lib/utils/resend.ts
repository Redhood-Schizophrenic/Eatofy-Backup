import { Resend } from "resend";

export const resend_email = new Resend(process.env.RESEND_API_KEY);
