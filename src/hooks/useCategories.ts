import { useQuery } from "react-query";
import { productsApi } from "../../services/products/api";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => productsApi.getAllCategories(),
  });
}