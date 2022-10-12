"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const User_1 = require("../model/User");
const router = express.Router();
const userService = new User_1.default();
router.get('/:id', (req, res) => {
    const { id } = req.query;
    const userById = userService.getUser(1);
});
router.put('/:id', (req, res) => {
    res.send('Route user!!!');
});
exports.default = router;
//# sourceMappingURL=users.js.map