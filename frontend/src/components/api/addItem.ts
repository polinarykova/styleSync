import { IItem } from "../typings/IItem";

const addItem = async (item: IItem) => {
  try {
    const response = await fetch("http://localhost:8000/addItem/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return;
  } catch (error) {
    console.error("There has been a problem with fetch operation:", error);
    throw error;
  }
};

export default addItem;
