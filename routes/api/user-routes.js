const router = require('express').Router();
const userController = require("../../controllers/user_controllers");
const {
    getAllUsers,
    getUserById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = userController;

router.route('/').get(getAllUsers).post(createUsers);


router.route('/:id').get(getUserById).put(updateUsers).delete(deleteUsers);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;