import * as express from "express";
import User from '../model/User'

const router = express.Router();
const userService = new User();

router.get('/:id', (req, res) => {
  const { id } = req.query;
  res.send(userService.getUser(id as string));
});

router.put('/:id', (req, res) => {
  res.send('Route user!!!')
})

export default router;