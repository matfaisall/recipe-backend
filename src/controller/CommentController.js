// export from model
const {
  getDataComment,
  postDataCommmet,
  getCommentCount,
  updateCommentRecipe,
} = require("../model/CommentModel");

const CommentController = {
  getComments: async (req, res) => {
    const { id } = req.params;

    let result = await getDataComment(parseInt(id));

    return res.status(200).json({
      message: "Get comments successfully",
      data: result.rows,
    });
  },

  postComment: async (req, res) => {
    const { text } = req.body;
    const { id } = req.params; //recipe id
    const users_id = req.payload.id;

    // console.log("ini req", req);
    let data = {
      text,
      recipe_id: parseInt(id),
      users_id,
    };

    await postDataCommmet(data);
    let dataRecipeCount = await getCommentCount(data);
    console.log("data recipe count", dataRecipeCount);
    await updateCommentRecipe(dataRecipeCount.rows[0].count, parseInt(id)); //...

    return res.status(201).json({
      message: "Your comment has been set successfully",
    });

    console.log("ini comment");
    console.log(data);
  },

  // deleteComment: async (req, res) => {
  //   const {id} = req.params;
  //   const users_id = req.payload.id;

  //   // Write the Validateion
  //   if (!id || id <= 0 || isNaN(id)) {
  //     return res
  //       .status(404)
  //       .json({ message: "your ID uncorrect! or Your ID not found!!" });
  //   }
  // }
};

module.exports = CommentController;
