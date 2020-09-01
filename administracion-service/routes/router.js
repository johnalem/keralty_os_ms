const express = require('express');
const router = new express.Router();

const administracion = require('../controllers/administracion.js');

router.route('/administracion/reportes/V1.0.0/auditoria/:idUsuario?').get(administracion.setRegistrarIngreso);
router.route('/administracion/usuarios/V1.0.0/ingreso').post(administracion.setIngresoUsuario);
router.route('/administracion/fechas/V1.0.0/validar').post(administracion.postValidarRango);
router.route('/atenciones/prioridad/dos/V1.0.0/select').get(administracion.getSeleccioneAtencion);
router.route('/servicios/prioridad/dos/V1.0.0/select').get(administracion.getSeleccioneServicio);
router.route('/antecedentes/prioridad/dos/V1.0.0/select').get(administracion.getSeleccioneAntecedentes);

module.exports = router;
