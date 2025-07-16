import type { Shop } from '../api/shopApi';
import '../styles/ShopCard.css';

interface Props {
  shop: Shop;
  onClick?: () => void;
}

export default function ShopCard({ shop,onClick }: Props){
    return(
        <div className='shop_card' onClick={onClick}>
            <div className='shop_name'>{shop.name}</div>
            <div className='shop_detail'>
                <div>⭐ {shop.average_rate}</div>
                <div> ( 총 리뷰 {shop.review_count} 개)</div>
            </div>
            <div> 전화번호 {shop.phone}</div>
        </div>
    );
}