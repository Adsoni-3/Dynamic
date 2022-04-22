module.exports = app => {
  const testModel = require("../controllers/testModel.controller.js");

  var router = require("express").Router();

  router.get('/',testModel.findAll);
  router.get("/:id", testModel.findOne); 

  // Create a new Tutorial
  router.post("/", testModel.create);
  router.put("/:id", testModel.update); 
   
  router.delete("/:id", testModel.delete);
 
  app.use('/api/testModel', router);
};
