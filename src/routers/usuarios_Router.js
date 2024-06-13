import { Router, request } from "express";
import { loginUsuarioController, registroUsuarioController } from "../controllers/usuarios_Controller.js";

const router = Router()

router.post('/users/register', registroUsuarioController)
router.post('/users/login', loginUsuarioController)



export default router