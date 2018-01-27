const router = require("express").Router();
const controller = require("../../controllers/mongoController");

router.route("/:collection/")
	.get(controller.findAll)
	.post(controller.create);

router.route("/:collection/:id")
	.get(controller.findById)
	.put(controller.update)
	.delete(controller.remove);

module.exports=router;