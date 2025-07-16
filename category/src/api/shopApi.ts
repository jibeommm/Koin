import { BASE_URL } from '../constants/api';

export interface Category {
  id: number;
  name: string;
  image_url: string;
}

export const getShopCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/shops/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('err');
  }

  const data = await response.json();
  return data.shop_categories;
};

export interface Shop {
  id: number;
  name: string;
  phone: string;
  category_ids: number[];
  delivery: boolean;
  pay_card: boolean;
  pay_bank: boolean;
  is_event: boolean;
  is_open: boolean;
  average_rate: number;
  review_count: number;
  benefit_details: string[];
  open: {
    day_of_week: string;
    closed: boolean;
    open_time: string;
    close_time: string;
  }[];
}

export const getAllShops = async (): Promise<Shop[]> => {
  const response = await fetch(`${BASE_URL}/v2/shops?sorter=NONE`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('err');
  }

  const data = await response.json();
  return data.shops;
};

export interface Menu {
  single_price: any;
  id: number;
  name: string;
  price: number;
  description: string;
  image_url?: string;
}

export const getShopMenus = async (shopId: number): Promise<Menu[]> => {
  const res = await fetch(`https://api.stage.koreatech.in/shops/${shopId}/menus`);
  const data = await res.json();

  const menus = data.menu_categories?.flatMap((cat: any) => cat.menus) ?? [];

  return menus;
};