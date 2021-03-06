import User from '../models/User';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res
        .status(400)
        .json({ message: 'This email is already registered' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
}

export default new UserController();
