import express from "express";
 import { addAdmin, addNewDoctor, getAllDoctors, getUserDetails, logoutAdmin, logoutPatient, patientLogin, patientRegistration } from "../controller/userController.js";
import { isAdminAuthenticated, isPatientAuthenticated} from "../middlewares/auth.js";
const router=express.Router();
router.post('/patient/signUp',patientRegistration);
router.post('/login',patientLogin);
router.post('/admin/addnew',isAdminAuthenticated,addAdmin);
router.get('/doctors',isAdminAuthenticated,getAllDoctors);
router.post('/doctors/addnew',isAdminAuthenticated,addNewDoctor);
router.get('/admin/me',isAdminAuthenticated,getUserDetails);
router.get('/patient/me',isPatientAuthenticated,getUserDetails);
router.get('/admin/logout',isAdminAuthenticated,logoutAdmin);
router.get('/patient/logout',isPatientAuthenticated,logoutPatient);
export default router;