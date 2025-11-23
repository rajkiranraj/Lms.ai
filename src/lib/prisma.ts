import { PrismaClient } from '@prisma/client';

// Global singleton for Prisma client (helps with hot-reloading in dev)
declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = global.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}

export default prisma;
