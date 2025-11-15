import express from "express";
import {
  getVets,
  newVet,
  getVetbyID,
  updateVetbyID,
  deleteVetbyID,
} from "../controllers/vetControllers.js";
const router = express.Router();

router.route("/vets").get(getVets);

router.route("/admin/vets").post(newVet);

router.route("/vets/:id").get(getVetbyID);

router.route("/vets/:id").put(updateVetbyID);

router.route("/vets/:id").delete(deleteVetbyID);

export default router;
