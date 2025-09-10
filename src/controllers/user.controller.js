import { asyncHandler } from "../middlewares/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
     res.status(200).json({
        messege:"ok"
    })
})

export {registerUser}