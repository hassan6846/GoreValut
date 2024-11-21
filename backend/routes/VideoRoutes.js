const express=require("express")

const router=express.Router()
//controllers
const Categories = require("../controllers/Videos/GetAllCategories")
router.route('/videos/categories').get(Categories)

module.exports=router