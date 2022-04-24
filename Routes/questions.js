import express from "express";
import { query } from "express";
const router = express.Router();
import {ItemModel} from '../models/schemas/questions.js';
import UserModel from '../models/schemas/RegistrationSchema.js';
import auth from '../validations/auth.js';

// router.get('/',(req, res) =>{
//     res.json({mess:"hi"})
    

// });

// router.get('/',(req, res)=>{
//     ItemModel.find()
//   //.sort({date:-1})
//   .then(questions => res.json(questions));
//   // .catch({err} => {
//   //   res.status(500).json({
//   //     message:`server error $ {err}`})
//   // });
//   });

  router.get('/',(req, res)=>{
    ItemModel.find()
  .sort({date:-1})
  .then(questions => res.json(questions));
  });

  router.post('/',(req,res)=>{
    const newItem = new ItemModel({
        username: req.body.username,
        question:req.body.question,
        role:req.body.role,
    });
    newItem
    .save()
    .then(question => res.json(question))
   .catch(err=> res.status(404).json({ Success:false}));
     });


     //posting using params

     router.post('/username:username/question:question/role:role',(req, res) =>{
      const newItem = new ItemModel({
        username: req.params.username,
        question:req.params.question,
        role: req.params.role,
      });
      newItem
      .save()
      .then(question => res.json(question))
     .catch(err=> res.status(404).json({ Success:false}));
     })


    //  //using query

    //  router.post('/item', (req,res)=>{
    //   const newItem = new ItemModel({
    //       name: req.query.name,
    //       description:req.query.description,
    //       price: req.query.price,
    //   });
    //   newItem
    //   .save()
    //   .then(item => res.json(item))
    //  .catch(err=> res.status(404).json({ Success:false}));
    //    });


       router.put("/:id", (req, res) => {
        const id = req.params.id;
        ItemModel.findOne({_id: id })
         .then(questionId =>{
           if (!questionId) {
          return res.status(404).json({message:`no such id ${id}`});
        }})
  
        ItemModel.updateOne({ _id: id }, {
          username: req.body.username,
          question:req.body.question,
          role:req.body.role,
          })
          .then((questionId) => {
            if (!questionId) {
              return res.status(404).json(`no such id ${id}`);
            }
          })
        .then(() => {
         ItemModel.findOne({_id: id })
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


      router.delete('/:id',(req,res)=>{
        ItemModel.findById(req.params.id)
         .then(question =>question.remove()
         .then(()=> res.json({message:"question removed"})))
         .catch(err=> res.status(404).json({ Success:false}));
          });

      router.get('/:id',(req, res)=>{
        const id = req.params.id;
        ItemModel.find({_id: id })
      .sort({date:-1})
      .then(questionId =>{
        if (!questionId) {
       return res.status(404).json({message:`no such id ${id}`});
     }})
      .then(() => {
        ItemModel.findOne({_id: id })
        .then(result =>{res.status(200).json(result)})
       })
      });
          
    export default router
