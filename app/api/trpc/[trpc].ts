// ./app/api/trpc/[trpc].ts

// This file sets up the tRPC API handler for Next.js

import * as trpcNext from '@trpc/server/adapters/next'; // Import the Next.js adapter for tRPC
import { appRouter } from '@/server/routers/_app'; // Import the tRPC router with all the API routes

// This handler connects your API to Next.js, allowing tRPC to handle API requests
export default trpcNext.createNextApiHandler({
  router: appRouter, // The main tRPC router that handles all your API logic
  createContext: () => ({}), // Empty context; you can add user authentication, etc., here
});
