const {
  getDataBookmarkedRecipe,
  unBookmarkData,
  bookmarkRecipeDataCount,
  updateBookmarkRecipe,
  bookmarkRecipeData,
} = require("../model/BookmarkModel");

const BookmarkController = {
  postBookmark: async (req, res) => {
    console.log("post bookmark");
    const { id } = req.payload;
    const { recipe_id } = req.params;

    const data = {
      recipe_id: recipe_id, // id recipe
      users_id: parseInt(id), // id user
    };

    // get all bokmark by user id
    const bookmarked = await getDataBookmarkedRecipe(id);
    // console.log("ini get bookmarked", bookmarked.rows);
    const isBookmarked = bookmarked.rows.filter(
      (recipe) => recipe.recipe_id == recipe_id
    );

    console.log("isbookmark", isBookmarked.length);

    if (isBookmarked.length > 0) {
      // unbookmark recipe
      await unBookmarkData(data);
      let bookmarkRecipeCount = await bookmarkRecipeDataCount(data);
      await updateBookmarkRecipe(bookmarkRecipeCount.rows[0].count, recipe_id); // update count bookmark on table recipe

      return res.status(200).json({
        message: "You unbookmarked this recipe",
      });
    }
    // bookmark recipe
    await bookmarkRecipeData(data);
    let bookmarkRecipeCount = await bookmarkRecipeDataCount(data);
    await updateBookmarkRecipe(bookmarkRecipeCount.rows[0].count, recipe_id);

    return res.status(200).json({
      message: "You bookmarked this recipe",
    });
  },

  getBookmarkRecipe: async (req, res) => {
    const { id } = req.payload; //id users
    const bookmarkedRecipe = await getDataBookmarkedRecipe(id);

    return res.status(200).json({
      message: "get bookmarked data recipe successfully",
      data: bookmarkedRecipe.rows,
    });
  },
};

module.exports = BookmarkController;
