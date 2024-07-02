export default function () {
  const categories = [
    "Tops",
    "Bottoms",
    "Dresses",
    "Outwear",
    "Headwear",
    "Footwear",
    "Accessories",
  ];
  return (
    <>
      <header className="fixed top-0 z-10 h-32 w-full bg-white p-5">
        <div className="border-blackflex flex w-full justify-between border-2 p-10 px-20">
          <div className="inline">logo</div>
          <div className="inline">
            <div className="inline pr-10">ikonica</div>
            <div className="inline">ikonica</div>
          </div>
        </div>
      </header>
      <div className="mb-32 mt-40 h-full w-full">
        {categories.map((category) => {
          return (
            <>
              <div className="mb-10 w-auto px-5">
                <div className="relative m-2 flex h-44 w-auto flex-col justify-evenly border-2">
                  <p className="absolute top-8 pl-5 text-left text-3xl font-bold text-gray-500">
                    {category}
                  </p>
                  <a
                    className="absolute bottom-8 right-8 z-10 flex justify-center"
                    href={`./${category}`}
                  >
                    <button className="mt-auto rounded-md bg-gray-300 p-1">
                      View all {">>"}
                    </button>
                  </a>
                  <div className="flex h-full w-full pl-52">
                    <div className="inline w-1/5 flex-1 border-2 bg-white hover:scale-110"></div>
                    <div className="hover:flex-3 inline flex-1 border-2 bg-white hover:scale-110"></div>
                    <div className="hover:flex-3 inline flex-1 border-2 bg-white hover:scale-110"></div>
                    <div className="hover:flex-3 inline flex-1 border-2 bg-white hover:scale-110"></div>
                    <div className="hover:flex-3 inline flex-1 border-2 bg-white hover:scale-110"></div>
                    <div className="hover:flex-3 inline flex-1 border-2 bg-white hover:scale-110"></div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <footer className="fixed bottom-0 z-10 flex h-32 w-screen flex-row bg-white text-white">
        <div className="flex w-1/3 items-center justify-center">
          <button className="h-12 w-40 rounded-md bg-blue-500">
            Create oufit
          </button>
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <button className="h-12 w-40 rounded-md bg-blue-500">
            Previous Fits
          </button>
        </div>
        <div className="flex w-1/3 items-center justify-center">
          <button className="h-12 w-40 rounded-md bg-blue-500">Drafts</button>
        </div>
      </footer>
    </>
  );
}
