import Parse from "parse/node.js";

// Get All Users
export const getAllUsers = async (req, res) => {
  try {
    let Person = Parse.Object.extend("Person");
    let query = new Parse.Query(Person);

    let allPerson = await query.findAll();

    res.json({ allPerson });
  } catch (error) {
    console.log(error);
  }
};

// Get User By Id
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    let Person = Parse.Object.extend("Person");
    let query = new Parse.Query(Person);

    query.equalTo("objectId", id);
    let user = await query.find();

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// Create User
export const createUser = async (req, res) => {
  const { age, name } = req.body;

  try {
    let Person = Parse.Object.extend("Person");
    let person = new Person();

    await person.set("age", age.toString());
    await person.set("name", name.toString());

    await person.save();
    res.json({
      message: "User was created",
    });
  } catch (error) {
    console.log(error);
  }
};

// Update User by ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { age, name } = req.body;
  try {
    let Person = Parse.Object.extend("Person");
    let query = new Parse.Query(Person);

    query.equalTo("objectId", id);

    let user = await query.first();

    user.set("age", age);
    user.set("name", name);

    let updatedUser = await user.save();

    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

// Delete User by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    let Person = Parse.Object.extend("Person");
    let query = new Parse.Query(Person);

    query.equalTo("objectId", id);

    let user = await query.first();

    await user.destroy();

    res.json({
      message: "User was deleted",
    });
  } catch (error) {
    console.log(error);
  }
};
