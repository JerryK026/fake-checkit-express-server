import { Router } from 'express';
import DoctorController from './DoctorController';

const router = Router();
const doctorController = new DoctorController();

router.get('/list', doctorController.doctorList);
router.get('/', doctorController.doctorInfo);

export default router;
