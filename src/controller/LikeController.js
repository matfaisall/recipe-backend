const {
  getDataLikeRecipe,
  unLikeData,
  likeRecipeDataCount,
  updateLikeRecipe,
  likeRecipeData,
} = require("../model/LikeModel");

const LikeController = {
  // post like
  postLike: async (req, res) => {
    const { id } = req.payload; // id user
    const { recipe_id } = req.params; // id recipe

    const likedRecipe = await getDataLikeRecipe(id); //pass id user
    const data = {
      users_id: id,
      recipe_id: parseInt(recipe_id),
    };

    const isLiked = likedRecipe.rows.filter(
      (recipe) => recipe.recipe_id == recipe_id
    );
    console.log(isLiked);
    if (isLiked.length > 0) {
      // unlike recipe
      await unLikeData(data);
      let dataRecipeCount = await likeRecipeDataCount(data);
      await updateLikeRecipe(dataRecipeCount.rows[0].count, recipe_id);

      return res.status(200).json({
        message: "You unliked this recipe",
      });
    }
    // like recipe
    await likeRecipeData(data);
    let dataRecipeCount = await likeRecipeDataCount(data);
    await updateLikeRecipe(dataRecipeCount.rows[0].count, recipe_id);

    return res.status(200).json({
      message: "You liked this recipe",
    });
  },

  // get all liked recipe
  getLikesRecipe: async (req, res) => {
    const { id } = req.payload;
    const likedRecipe = await getDataLikeRecipe(id);
    console.log(likedRecipe);

    return res.status(200).json({
      message: "get like recipe successfully",
      data: likedRecipe.rows,
    });
  },
};

module.exports = LikeController;
