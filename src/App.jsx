import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import "./App.css";
import Quote from "./components/query/Quote";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Quote />
        <Quote />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
