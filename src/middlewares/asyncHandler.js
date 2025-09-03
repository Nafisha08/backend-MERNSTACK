

const asyncHandler = (requestHandler) => {
    (req, res, next) => { //yeh Express.js ka standard middleware pattern hai 
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err))
    }
}







export { asyncHandler }
    
// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()={}
// const asyncHandler = (func) => async () => { }


// const asyncHandler = (fun) => async (req, res, next) => {
//         try {
//             await fun(req,res,next)
//         } catch (error) {
//             res.staus(error.code || 500).json({
//                 success: false,
//                 message:error.message
//             })
//         }
//     }
    
