import { useState } from 'react';
import { useCategories, useShops } from '../hooks/useShops';
import CategoryList from '../components/CategoryList';
import ShopCard from '../components/ShopCard';
import type { Shop } from '../api/shopApi';

interface Props {
  query: string;
  onSelectShop: (shop: Shop) => void;
}

export default function Page({ query, onSelectShop }: Props) {
  const [selected, setSelected] = useState(0);
  const { data: categories = [] } = useCategories();
  const { data: shops = [] } = useShops();

  const selectShops = (): Shop[] => {
    let filtered: Shop[] = selected === 0
      ? shops
      : shops.filter(shop => shop.category_ids.includes(selected));

    if (query) {
      filtered = filtered.filter(shop =>
        shop.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return filtered;
  };

  return (
    <div>
      <div>주변 상점</div>
      <CategoryList
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />
      <div className="shop_list">
        {selectShops().map((shop) => (
          <ShopCard key={shop.id} shop={shop} onClick={() => onSelectShop(shop)} />
        ))}
      </div>
    </div>
  );
}
