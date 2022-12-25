import { Collection } from "../models/collection.schema";
import asyncHandler from "../services/asyncHandler";
import CustomError from "../utils/customError";

/******************************
 * @CREATE_COLLECTION
 * @route http://localhost:4000/api/collection
 * @description User signup controller for creating a new user
 * @parameters name, email, password
 * @return User Object
 *********************************/

export const createCollection = asyncHandler(async (req, res) => {
  // Take name from frontend
  const { name } = req.body;

  if (!name) {
    throw new CustomError("Collection name is required", 400);
  }

  // Add this data to DB
  const collection = await Collection.create({
    name,
  });

  // Send this response value to frontend
  res.status(200).json({
    status: "success",
    message: "Collection created succesfully",
    collection,
  });
});

export const updateCollection = asyncHandler(async (req, res) => {
  //existing value to be updated
  const { id: collectionId } = req.params;

  //new value to get updated
  const { name } = req.body;

  if (!name) {
    throw new CustomError("Collection name is required", 400);
  }

  let updatedCollection = await Collection.finByIdAndUpdate(
    collectionId,
    {
      name,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedCollection) {
    throw new CustomError("Collection not found", 400);
  }

  // send response to front end
  res.status(200).json({
    status: "Success",
    message: "Collection updated succesfully",
    body: {
      updatedCollection,
    },
  });
});

export const deleteCollection = asyncHandler(async (req, res) => {
  const { id: collectionId } = req.params;

  const collectionToDelete = await Collection.findByIdAndDelete(collectionId);

  if (!collectionToDelete) {
    throw new CustomError("Collection not found", 400);
  }

  collectionToDelete.remove();

  //send response to frontend
  res.status(200).json({
    status: "success",
    message: "Collection deleted successfully",
  });
});

export const getAllCollections = asyncHandler(async (req, res) => {
  const collections = await Collection.find();

  if (!collections) {
    throw new CustomError("No collection found", 400);
  }

  res.status(200).json({
    status: "Success",
    body: {
      collections,
    },
  });
});
