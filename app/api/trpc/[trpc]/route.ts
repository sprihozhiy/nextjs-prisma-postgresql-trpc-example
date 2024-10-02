// ./app/api/trpc/[trpc].ts

// This file sets up the tRPC API handler for Next.js
import { NextRequest } from 'next/server';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/routers/_app'; // Import the tRPC router with all the API routes

export const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc', // This is your tRPC endpoint
    req,
    router: appRouter,
    createContext: () => ({}), // You can modify the context here
  });
};

export { handler as GET, handler as POST };