"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const port = parseInt(process.env.SERVER_PORT_DB, 10);
function getConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            user: process.env.SERVER_USER_DB,
            host: process.env.SERVER_HOST_DB,
            database: process.env.SERVER_DATABASE_DB,
            password: process.env.SERVER_PASSWORD_DB,
            port,
        });
        yield client.connect((error) => {
            if (error)
                throw error;
            console.log(`DB connect on port: ${port}`);
        });
        return client;
    });
}
exports.default = getConnection;
//# sourceMappingURL=dbConnect.js.map