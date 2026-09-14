"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.use(express_1.default.json());
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
mongoose_1.default
    .connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'Octofit Tracker backend is running' });
});
app.listen(port, () => {
    console.log(`Octofit Tracker backend listening on port ${port}`);
});
