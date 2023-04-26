import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser , getInternships, addInternship ,getInternshipById, editInternship, deleteInternship } from '../controller/user-controller.js';
import {addPPO, getPPOById,getPPOs,editPPO, deletePPO} from '../controller/ppo-controller.js'
const router = express.Router();

router.get('/', getUsers);
router.post('/add', addUser);
router.post('/addint', addInternship);
router.get('/allint', getInternships);
router.post('/allppo', getPPOs);
router.post('/addppo', addPPO);

router.get('/internship/:id', getInternshipById);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.get('/:id', getPPOById);
router.put('/:id', editInternship);
router.delete('/:id', deleteInternship);
router.put('/:id', editPPO);
router.delete('/:id', deletePPO);
router.delete('/:id', deleteUser);


export default router;