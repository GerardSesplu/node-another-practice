"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = express_1.default();
app.set('port', 3000);
app.listen(app.get('port'), () => {
    console.log(`server is running on port ${app.get('port')}`);
});
app.use(express_1.default.json());
app.use('/users', user_routes_1.default.router);
