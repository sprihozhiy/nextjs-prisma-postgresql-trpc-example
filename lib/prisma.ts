// ./lib/prisma.ts

// This file sets up the Prisma client to interact with your PostgreSQL database

import { PrismaClient } from '@prisma/client'; // Import Prisma client

// This ensures that Prisma client is only initialized once (important for hot reloading)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// If Prisma is already initialized, reuse it, otherwise create a new instance
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma; // Cache the Prisma client in development mode