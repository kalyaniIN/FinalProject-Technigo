import { useEffect } from "react";
import { getVegetarianKeto } from "../../apis/fetchRecipes";

export const Vegetarian = () => {
  const getVegetarianList = async () => {
    try {
      const data = await getVegetarianKeto();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVegetarianList();
  }, []);

  return <div>vegetarian</div>;
};
