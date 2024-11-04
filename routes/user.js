import expresss from 'express';
import { signup } from '../controllers/user.js';
const router = expresss.Router();

router.post('/signup', signup);

export default router;
