// ./lib/trpc.ts

// This file sets up the tRPC client so the frontend can talk to the backend

import { httpBatchLink } from '@trpc/client'; // This batches multiple tRPC requests to reduce API calls
import { createTRPCNext } from '@trpc/next'; // Create the tRPC client for Next.js
import type { AppRouter } from '@/server/routers/_app'; // Import the type of the tRPC router (needed for TypeScript)

// Setup tRPC client with configuration
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: '/api/trpc', // The URL where tRPC API is hosted
        }),
      ],
    };
  },
  ssr: false, // Disable Server-Side Rendering (optional, for simplicity)
});
