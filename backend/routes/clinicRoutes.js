import express from "express";
import { clinicService } from "../services/clinicService.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const clinic = await clinicService.create(req.body);
    res.status(201).json(clinic);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const clinics = await clinicService.list();
    res.status(200).json(clinics);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const clinic = await clinicService.getById(req.params.id);
    res.status(200).json(clinic);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const clinic = await clinicService.update(req.params.id, req.body);
    res.status(200).json(clinic);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await clinicService.delete(req.params.id);
    res.status(200).json({ message: "Clínica deletada com sucesso" });
  } catch (error) {
    next(error);
  }
});

export default router;
