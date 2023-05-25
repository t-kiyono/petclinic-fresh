import { AppProps } from "$fresh/server.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "preact/hooks";
import superjson from "superjson";
import { api } from "~/utils/api.ts";

export default function App({ Component }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: "/api/trpc"
        })
      ]
    })
  );
  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Component />
      </QueryClientProvider>
    </api.Provider> 
  );
}
