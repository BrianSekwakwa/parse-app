import Parse from "parse/node.js";

// Create A Post for a specific user
export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    // Get a user by id
    const Person = Parse.Object.extend("Person");
    const query = new Parse.Query(Person);

    query.equalTo("objectId", "Qc2pAEArFp");
    let user = await query.find();

    // Create a post for a user
    const Posts = Parse.Object.extend("Posts");
    const post = new Posts();

    post.set("title", title);
    post.set("content", content);

    post.set("parent", user);

    await post.save();

    res.json({
      message: "Post was created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
