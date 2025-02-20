import express from "express";
import {
  addToCart,
  getUserCart,
  UpdateCart,
} from "../controllers/cart.controller.js";
import authUser from "../middleware/userAuth.middleware.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, UpdateCart);

export default cartRouter;
