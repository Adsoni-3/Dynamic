 const req = require("express/lib/request");   
const db = require("../models"); 
const TestModel = db.testModel;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const testModel = new TestModel({
    title: req.body.title ,
    description: req.body.description
  });

  // Save Tutorial in the database
  testModel
    .save(testModel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

 
exports.findAll=(req,res)=>{
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  TestModel.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(
      err => {
        res.status(500)
          .send(
            {
              message: err.message || "Some error occurred while retrieving testModels."
            }
          )
      }
  )
}

exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id);
  TestModel.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found testModel with id: " + id });
      else
        res.send(data);
    }).catch(err => {
      res.status(500).send({ message: "Error retrieving TestModels with Id: " + id });
    })
};
 

exports.update=(req,res)=>{
  if(!req.body){
    return res.status(400).send({
      message:"Data to update cannot be empty"
    });
  }
  const id=req.params.id;
  TestModel.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data=>{
    if(!data){
      res.status(400).send({
        message:`Cannot update testModel with Id=${id}. Maybe Testmodel not found`
      });
    }
    else{
      res.send({
        message:`TestModel was updated successfully`
      });
    }
  })
  .catch(error=>{
    res.status(500).send({
      message:`Error updating testModel with id=${id}`
    })
  })
}

exports.delete = (req, res) => {
  const id = req.params.id;

  TestModel.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete TestModel with id=${id}. Maybe TestModel was not found!`
        });
      } else {
        res.send({
          message: "TestModel was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete TestModel with id=" + id
      });
    });
};