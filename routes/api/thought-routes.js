const router = require('express').Router();
const { createReaction, updateThought, deleteThought } = require('../../controllers/thought_controller');
const thoughtController = require("../../controllers/thought_controller");

const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = thoughtController;

router.route("/").get(getAllThoughts).post(createThought);

router
.route("/:id")
.post(createReaction)
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;