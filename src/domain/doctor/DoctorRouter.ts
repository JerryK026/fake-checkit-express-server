import { wrapAsync } from '@common/wrapAsync';
import { Router } from 'express';
import DoctorController from './DoctorController';

const router = Router();
const doctorController = new DoctorController();

router.get('/list', wrapAsync(doctorController.doctorList));
router.get('/', wrapAsync(doctorController.doctorInfo));

export default router;
