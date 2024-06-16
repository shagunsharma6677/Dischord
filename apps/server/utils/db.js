import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { PrismaClient } = require('../prisma/src/generated/client');

const db = new PrismaClient();

const initializeDatabase = async () => {
  try {
    await db.$connect();
  } catch (err) {
    console.error('Failed to connect to Prisma Database:', err);
    await db.$disconnect();
    process.exit(1);
  }
};

export { db, initializeDatabase };
