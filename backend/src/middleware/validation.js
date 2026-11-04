import { z } from 'zod';

// Server-side validation schema
export const enquirySchema = z.object({
  full_name: z.string().min(2, 'Full name is required').max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  email: z.string().email('Invalid email address').max(254),
  service_required: z.enum([
    'Living Room', 'Bedroom', 'Kitchen', 'Wardrobe',
    'Complete Home', 'Office', 'Other'
  ], { errorMap: () => ({ message: 'Invalid service selection' }) }),
  property_type: z.enum([
    'Apartment', 'Independent House', 'Villa',
    'Office', 'Commercial Space', 'Other'
  ], { errorMap: () => ({ message: 'Invalid property type' }) }),
  budget: z.enum([
    'Under ₹2 Lakhs', '₹2–5 Lakhs', '₹5–10 Lakhs',
    '₹10–20 Lakhs', 'Above ₹20 Lakhs', 'Not Decided'
  ], { errorMap: () => ({ message: 'Invalid budget range' }) }),
  consultation_date: z.string().optional().nullable(),
  project_description: z.string().min(10, 'Description too short').max(2000),
});
