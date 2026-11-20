import { cvModelo } from "../modelos/cvModelo.js";

export const mostrarCurriculum = (req, res) => {
  res.render("cv", { cv: cvModelo, errorFormulario: null });
};

export const recibirContacto = (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre?.trim() || !correo?.trim() || !mensaje?.trim()) {
    return res.status(400).render("cv", {
      cv: cvModelo,
      errorFormulario: "Por favor completa nombre, correo y mensaje."
    });
  }

  console.log("Nuevo mensaje de contacto:", {
    nombre: nombre.trim(),
    correo: correo.trim(),
    mensaje: mensaje.trim()
  });

  res.status(200).render("contacto", {
    cv: cvModelo,
    nombre: nombre.trim(),
    correo: correo.trim(),
    mensaje: mensaje.trim()
  });
};