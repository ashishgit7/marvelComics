import './App.css';
import { Home } from './Page/Home';
// import { Loader } from './components/Loader'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route } from "react-router-dom"
import ComicDescription from './Page/ComicDescription';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/comic/:ID" element={<ComicDescription/>} />
      </Routes>
    </QueryClientProvider>


  );
}

export default App;
