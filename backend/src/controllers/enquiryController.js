import { enquirySchema } from '../middleware/validation.js';
import { createEnquiry } from '../services/enquiryService.js';

/**
 * POST /api/enquiries
 * Accept a new contact form submission.
 */
export async function submitEnquiry(req, res) {
  try {
    // Parse + validate
    const parsed = enquirySchema.safeParse(req.body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please check your input.',
        errors: fieldErrors,
      });
    }

    // Save to DB
    const record = await createEnquiry(parsed.data);

    return res.status(201).json({
      success: true,
      message: 'Enquiry received. We will contact you within 24 hours.',
      id: record?.id,
    });

  } catch (err) {
    console.error('Enquiry submission error:', err.message);

    // Distinguish DB not configured vs real server error
    if (err.message.includes('not configured')) {
      return res.status(503).json({
        success: false,
        message: 'Database not yet configured. Please complete Supabase setup.',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
}

/**
 * GET /api/health
 */
export function healthCheck(_req, res) {
  res.json({
    status: 'ok',
    service: 'Nivas Interiors API',
    timestamp: new Date().toISOString(),
  });
}
