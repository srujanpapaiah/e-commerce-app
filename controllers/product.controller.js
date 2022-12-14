import Product from "../models/product.schema.js";
import formidable from "formidable";
import fs from "fs";
import { deleteFile, s3FileUpload } from "../services/imageUpload.js";
import Mongoose from "mongoose";
import asyncHandler from "../services/asyncHandler";
import CustomerError from "../utils/customError.js";
