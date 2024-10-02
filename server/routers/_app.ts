// ./server/routers/_app.ts

// This file defines the backend API routes using tRPC and Prisma

import { initTRPC } from '@trpc/server'; // Initialize tRPC for the server
import { z } from 'zod';  // Zod is used for input validation (ensures data is correct)
import { prisma } from '@/lib/prisma';  // Prisma client for interacting with the database

// Create the tRPC server
const t = initTRPC.create();

// Define the API route for creating a user
export const appRouter = t.router({
  createUser: t.procedure
    .input(
      z.object({
        email: z.string().email(), // Validate that the email is a string and follows email format
        name: z.string(), // Validate that the name is a string
        subscriptionPlan: z.enum(['Free', 'Basic', 'Pro']), // Validate that subscription plan is one of these values
      })
    )
    .mutation(async ({ input }) => {
      console.log('Creating user with:', input);
      // When the 'createUser' mutation is called, this function runs
      const newUser = await prisma.user.create({
        data: {
          email: input.email,
          name: input.name,
          subscriptionPlan: input.subscriptionPlan,
          // Assign tokens based on the subscription plan
          tokens: input.subscriptionPlan === 'Free' ? 100 : input.subscriptionPlan === 'Basic' ? 1000 : 10000,
        },
      });
      return newUser; // Return the created user
    }),
});

// Export the type of the appRouter for TypeScript
export type AppRouter = typeof appRouter;