import { supabase } from '../config/supabase.js';

/**
 * Submit a new enquiry to the database.
 */
export async function createEnquiry(data) {
  if (!supabase) {
    throw new Error('Database not configured. Please set up Supabase credentials.');
  }

  const { data: record, error } = await supabase
    .from('enquiries')
    .insert([
      {
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        service_required: data.service_required,
        property_type: data.property_type,
        budget: data.budget,
        consultation_date: data.consultation_date || null,
        project_description: data.project_description,
        status: 'new',
        created_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Supabase insert error:', error);
    throw new Error('Failed to save enquiry to database.');
  }

  return record;
}
