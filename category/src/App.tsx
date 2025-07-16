import { useState } from 'react';
import Search from './components/Search';
import Page from './pages/Page';
import Detail from './components/Detail';
import type { Shop } from './api/shopApi';

export default function App() {
  const [query, setQuery] = useState('');
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);

  const handleBack = () => setSelectedShop(null); 

  return (
    <div>
      <h1>상점 리스트</h1>
      {selectedShop ? (
        <Detail shop={selectedShop} onBack={handleBack} />
      ) : (
        <>
          <Search onSearch={setQuery} />
          <Page query={query} onSelectShop={setSelectedShop} />
        </>
      )}
    </div>
  );
}
