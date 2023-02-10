const express = require("express");
const router = express.Router();
const apiController = require("../controllers/api.controller");
router.get("/v1/todos", apiController.renderAll);
router.get("/v1/todos/:id", apiController.renderOneList);
router.post("/v1/todos/", apiController.createOneList);
router.put("/v1/todos/:id", apiController.updateOneListById);
router.delete("/v1/todos/:id", apiController.deleteOneListById);
module.exports = router;
