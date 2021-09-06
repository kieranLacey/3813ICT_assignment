import users from "../data.js";

const loginController = async (req, res) => {
  const { username, password } = req.body;

  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      return res.status(200).send(users[i]);
    }
  }
  return res.status(400).send("incorrect username or password");
};

export default loginController;