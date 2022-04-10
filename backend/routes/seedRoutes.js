import express from "express";
import data from "../data.js";
import Admin from "../models/adminModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

const seedRouter=express.Router();

seedRouter.get('/',async(erq,res)=>{
    await Product.remove({});
    const createdProducts =await Product.insertMany(data.products);
    await Admin.remove({});
    const createdAdmin=await Admin.insertMany(data.admin);
    await User.remove({});
    const createdUsers =await User.insertMany(data.users);
    res.send({createdProducts,createdUsers ,createdAdmin});
});
export default seedRouter;