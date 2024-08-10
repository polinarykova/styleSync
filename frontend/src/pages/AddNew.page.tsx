import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IItem } from "../components/typings/IItem";
import processImage from "../components/api/processImage";
import { Buffer } from "buffer";

export default function () {
  const { category } = useParams();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | undefined>(
    undefined,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    category ?? "",
  );

  //hardcoded user
  const user_id = 1;

  useEffect(() => {
    if (selectedImageFile) {
      // console.log("Selected image file:", selectedImageFile);
    }
  }, [selectedImageFile]);

  useEffect(() => {
    if (processedImage) {
      //console.log("Procesed image url:", processedImage);
    }
  }, [processedImage]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImageUrl(URL.createObjectURL(e.target.files[0]));
      setSelectedImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const descriptionEl = document.getElementById(
      "description",
    ) as HTMLTextAreaElement | null;

    const description = descriptionEl?.value;

    const item: IItem = {
      description: description ?? "",
      id: 0,
      category: category ?? "",
      user_id: user_id,
      image_url: selectedImageUrl ?? "",
    };

    //addItem(item);
  };

  const options = [
    "Tops",
    "Bottoms",
    "Dresses",
    "Outwear",
    "Headwear",
    "Footwear",
    "Accessories",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedCategory(option);
    setIsOpen(false);
  };

  const handleGenerateNew = async () => {
    const decode = (str: string): string =>
      Buffer.from(str, "base64").toString("binary");

    const encode = (str: string): string =>
      Buffer.from(str, "binary").toString("base64");

    const image = decode(
      (await processImage(encode(selectedImageUrl || ""))) || "",
    );

    console.log(image);

    setProcessedImage(image);
  };

  return (
    <>
      <header className="fixed top-0 h-32 w-full bg-white p-5">
        <div className="flex w-full justify-between border-2 p-10 px-20">
          <div className="inline">logo</div>
          <div className="inline">
            <div className="inline pr-10">ikonica</div>
            <div className="inline">ikonica</div>
          </div>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="h-screen w-auto">
        <div className="flex h-full w-full flex-col items-center justify-start px-20 pt-40">
          <input
            type="hidden"
            id="category"
            name="category"
            value={selectedCategory || ""}
          />
          <label htmlFor="image" className="mt-10">
            Upload your image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mb-4 mt-2"
            id="image"
            required
          />
          <div className="mb-4 mr-0">
            <button
              onClick={toggleDropdown}
              className="relative min-w-72 rounded-md border-2 border-gray-400 px-4 py-2 pr-10"
            >
              {selectedCategory ? selectedCategory : "Select category"}
              <span
                className={`arrow absolute m-auto transform pl-5 ${
                  isOpen ? "rotate-180 pl-0 pr-5" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {isOpen && (
              <ul className="dropdown-menu absolute z-10 mt-1 divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg">
                {options.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {selectedImageUrl && (
            <>
              <div className="mt-8">
                <h2 className="mb-2 text-xl font-semibold">Original:</h2>
                <img
                  src={selectedImageUrl}
                  alt="Selected"
                  style={{ maxWidth: "300px" }}
                  className="rounded-lg"
                />
                <button onClick={handleGenerateNew}>generate new</button>
              </div>
              <div className="mt-8">
                <h2 className="mb-2 text-xl font-semibold">New:</h2>
                <img
                  src={processedImage}
                  alt="Selected"
                  style={{ maxWidth: "300px" }}
                  className="rounded-lg"
                />
              </div>
            </>
          )}
          <textarea
            id="description"
            placeholder="Add description"
            className="w-72 rounded-md border-2 border-gray-400 p-5"
          ></textarea>
        </div>

        <footer className="fixed bottom-0 flex h-32 w-screen flex-row bg-white">
          <div className="flex w-1/2 items-center justify-center">
            <button
              type="submit"
              className="h-12 w-40 rounded-md bg-blue-500 text-white"
            >
              Add
            </button>
          </div>
          <div className="flex w-1/2 items-center justify-center">
            <button className="h-12 w-40 rounded-md text-blue-500">
              Cancel
            </button>
          </div>
        </footer>
      </form>
    </>
  );
}
