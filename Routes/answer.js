import express from "express";
import { query } from "express";
const router = express.Router();
import {AnswerModel} from '../models/schemas/answer.js';
import UserModel from '../models/schemas/RegistrationSchema.js';
import auth from '../validations/auth.js';


  //update a question
  router.put("/:id", (req, res) => {
    const id = req.params.id;
    ItemModel.findOne({_id: id })
     .then(questionId =>{
       if (!questionId) {
      return res.status(404).json({message:`no such id ${id}`});
    }})
       
    ItemModel.apply({ _id: id }, {
      username: req.body.username,
      answer:req.body.answer,
      })
      .then((questionId) => {
        if (!questionId) {
          return res.status(404).json(`no such id ${id}`);
        }
      })
    .then(() => {
     ItemModel.apply({_id: id })
     .then(result =>{res.status(200).json(result)})
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
        message:`Id is wrong`
      });
    });
  });



export default router