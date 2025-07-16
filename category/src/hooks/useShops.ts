import { useQuery } from '@tanstack/react-query';
import { getAllShops, getShopCategories } from '../api/shopApi';

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getShopCategories,
    });
};

export const useShops = () => {
    return useQuery({
        queryKey: ['shops'],
        queryFn: getAllShops,
    });
}
