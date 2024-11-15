

const SingleVideo = (req, res, next) => {
    const { id } = req.param
    if (!id) {
        res.status(400).json({
            success: false,
            message: "Invalid Param property is being passed"
        })
    }
    try {
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}
module.exports=SingleVideo