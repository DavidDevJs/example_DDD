"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const routes_1 = require("./routes");
const app = express();
const PORT = process.env.SERVER_PORT || 3000;
app.use(express.json());
(0, routes_1.default)(app);
app.listen(PORT, () => {
    console.log(`Server runing on port: ${PORT}`);
});
//# sourceMappingURL=index.js.map