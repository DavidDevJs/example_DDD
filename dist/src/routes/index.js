"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_1 = require("./users");
function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/users', users_1.default);
}
exports.default = routerApi;
//# sourceMappingURL=index.js.map