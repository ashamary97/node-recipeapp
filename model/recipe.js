var mongoose=require("mongoose")
const recipeSchema= new mongoose.Schema(
    {
        recipename:{type:String},
        ingredients:{type:String},
        description:{type:String},
      
    }
)
var recipeModel= mongoose.model("recipes", recipeSchema)
module.exports={recipeModel}