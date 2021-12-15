import { useCallback, useState } from 'react';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage';


const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(
    category => setCategory(category),
    [category]
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NewsPage></NewsPage>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;