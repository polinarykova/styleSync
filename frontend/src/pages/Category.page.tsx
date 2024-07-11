import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItemList } from "../components/typings/IItem";
import getItems from "../components/api/getItems";

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [itemList, setItemList] = useState<IItemList>({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems(1, category ?? "");
        setItemList(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="fixed top-0 z-10 h-32 w-full bg-white p-5">
          <div className="flex justify-between border-2 p-10 px-20">
            <div className="inline">logo</div>
            <div className="inline">
              <div className="inline pr-10">ikonica</div>
              <div className="inline">ikonica</div>
            </div>
          </div>
        </header>
        <main className="my-32 flex flex-grow items-center justify-center">
          <div>
            {itemList.items.map((item) => (
              <div
                className="m-2 border-2 border-solid p-2 text-black"
                key={item.id}
              >
                <p>ID: {item.id}</p>
                <p>Description: {item.description}</p>
                <p>Category: {item.category}</p>
                {item.image_url && (
                  <img
                    src={item.image_url}
                    alt="Item Image"
                    className="max-h-xs max-w-xs"
                  />
                )}
              </div>
            ))}
            {itemList.items.length === 0 && (
              <p>No items found for category: {category}</p>
            )}
          </div>
        </main>
        <footer className="fixed bottom-0 flex h-32 w-screen flex-row bg-white">
          <a className="m-auto" href={`./${category}/add`}>
            <button className="h-12 w-40 rounded-md bg-blue-500 text-white">
              Add New
            </button>
          </a>
        </footer>
      </div>
    </>
  );
};

export default CategoryPage;
