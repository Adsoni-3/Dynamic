// module.exports = (sequelize, Sequelize) => {
//   const Tutorial = sequelize.define("tutorial", {
//     title: {
//       type: Sequelize.STRING
//     },
//     description: {
//       type: Sequelize.STRING
//     },
//     published: {
//       type: Sequelize.BOOLEAN
//     }
//   });

//   return Tutorial;
// };


module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description:String,
      published:Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const testModel = mongoose.model("testModel", schema);
  return testModel;
};
