import { IItem, IItemList } from "../typings/IItem";

const getItems = async (
  userId: number,
  category: string,
): Promise<IItemList> => {
  const url = `http://localhost:8000/getItems/${userId}/${encodeURIComponent(category)}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data: IItem[] = await response.json();
    const itemList: IItemList = { items: data };

    return itemList;
  } catch (error) {
    console.error("There has been a problem with fetch operation:", error);
    throw error;
  }
};

export default getItems;
