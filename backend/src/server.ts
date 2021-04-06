import express from 'express';
import cors from 'cors';

require('dotenv').config();

import authRoutes from './auth/routes';
const server = express();

server.use(express.json());
server.use(cors());
// server.use(authRoutes);

server.get('/', (_, res) => res.json({ ok: true }));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}! =D`);
});
