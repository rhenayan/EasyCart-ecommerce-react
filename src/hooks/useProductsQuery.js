import {
  fetchAllProducts,
  fetchJeweleryProducts,
  fetchElectronicsProducts,
  fetchMensClothingProducts,
  fetchWomensClothingProducts,
  fetchSingleProduct
} from '../api/productsApi';
import { useQuery } from 'react-query';

export const useAllProductsQuery = () =>
  useQuery({ queryKey: ['allProducts'], queryFn: fetchAllProducts});

export const useSingleProductQuery = (productId) => useQuery({queryKey: [`product`, productId], queryFn: fetchSingleProduct})


export const useJeweleryQuery = () =>
  useQuery({ queryKey: ['jewelery'], queryFn: fetchJeweleryProducts });

export const useMensClothingQuery = () =>
  useQuery({ queryKey: ['men-clothing'], queryFn: fetchMensClothingProducts });

export const useWomenClothingQuery = () =>
  useQuery({
    queryKey: ['women-clothing'],
    queryFn: fetchWomensClothingProducts,
  });

export const useElectronicsQuery = () =>
  useQuery({
    queryKey: ['electronics'],
    queryFn: fetchElectronicsProducts,
  });

