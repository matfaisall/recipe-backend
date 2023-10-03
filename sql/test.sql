-- Active: 1696055468436@@127.0.0.1@5432@restaurant

SELECT * FROM users;

-- test get bookmarked

SELECT
    bookmark.recipe_id,
    recipe.category_id,
    recipe.title,
    recipe.ingredients,
    recipe.like_count,
    recipe.saved_count,
    recipe.comment_count,
    recipe.image,
    category.name AS category,
    users.name AS author
FROM bookmark
    JOIN recipe ON bookmark.recipe_id = recipe.id
    JOIN category ON recipe.category_id = category.id
    JOIN users ON recipe.users_id = users.id
WHERE bookmark.users_id = 9;