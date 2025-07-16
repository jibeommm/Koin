import { useEffect, useState } from 'react';
import type { Shop, Menu } from '../api/shopApi';
import { getShopMenus } from '../api/shopApi';
import '../styles/Detail.css';

interface MenuCategory {
  id: number;
  name: string;
  menus: Menu[];
}

interface Props {
  shop: Shop;
  onBack: () => void;
}

export default function Detail({ shop, onBack }: Props) {
  const [categories, setCategories] = useState<MenuCategory[]>([]);

  useEffect(() => {
    getShopMenus(shop.id)
      .then((data) => {
        if (Array.isArray(data)) {
            setCategories([
            {
                id: 0,
                name: '전체',
                menus: data,
            },
            ]);
        } else {
            setCategories([]);
        }
        })
  }, [shop.id]);

  return (
    <div>
        <button onClick={onBack}> 홈으로 </button>
        <div>{shop.name}</div>
        <div>전화번호:  {shop.phone}</div>
        <div>⭐ : {shop.average_rate}</div>
        <div>리뷰 수 : {shop.review_count}</div>
        <div>배달 : {shop.delivery ? '가능' : '불가'}</div>
        <div>카드 : {shop.pay_card ? '가능' : '불가'}</div>
        <div>이벤트 중 : {shop.is_event ? 'O' : 'X'}</div>
        <div>영업 상태 : {shop.is_open ? '영업 중' : '영업 종료'}</div>
        <div>혜택 정보 : {shop.benefit_details ?? '없음'}</div>

        <div className='Menu'>
            <div>Menu</div>
            {categories.map((category) => (
                <div key={category.id}>
                    {category.menus.map((menu) => (
                        <div key={menu.id}>
                        <div>{menu.name} -  {menu.single_price?.toLocaleString()}원 </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
  );
}
