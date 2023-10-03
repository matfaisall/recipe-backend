const {
  postDataLike,
  getDataLike,
  getDataLikeRecipe,
  unLikeData,
  likeRecipeDataCount,
  updateLikeRecipe,
  likeRecipeData,
  getLikedRecipe,
} = require("../model/LikeModel");

const LikeController = {
  postLike: async (req, res) => {
    const { id } = req.payload; // id user
    const { recipe_id } = req.params; // id recipe

    const likedRecipe = await getDataLikeRecipe(id); //id user
    const data = {
      users_id: id,
      recipe_id: parseInt(recipe_id),
    };

    // const result = await likeRecipeData(data);

    // return

    const isLiked = likedRecipe.rows.filter(
      (recipe) => recipe.recipe_id == recipe_id
    );
    console.log(isLiked);
    if (isLiked.length > 0) {
      await unLikeData(data);
      let dataRecipeCount = await likeRecipeDataCount(data);
      await updateLikeRecipe(dataRecipeCount.rows[0].count, recipe_id);

      return res.status(200).json({
        message: "You unliked this recipe",
      });
    }
    await likeRecipeData(data);
    let dataRecipeCount = await likeRecipeDataCount(data);
    await updateLikeRecipe(dataRecipeCount.rows[0].count, recipe_id);

    return res.status(200).json({
      message: "You liked this recipe",
    });
  },

  getLikesRecipe: async (req, res) => {
    const { id } = req.payload;
    const likedRecipe = await getLikedRecipe(id);
    console.log(likedRecipe);

    return res.status(200).json({
      message: "get like recipe successfully",
      data: likedRecipe.rows,
    });
  },
};

module.exports = LikeController;
