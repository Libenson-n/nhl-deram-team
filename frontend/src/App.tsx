import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import SearchPage from "./pages/search-page";
import Header from "./components/header";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
