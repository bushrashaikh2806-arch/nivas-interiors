import { Router } from 'express';
import { submitEnquiry, healthCheck } from '../controllers/enquiryController.js';

const router = Router();

router.get('/health', healthCheck);
router.post('/enquiries', submitEnquiry);

export default router;
