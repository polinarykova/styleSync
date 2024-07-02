export default function () {
  return (
    <>
      <header className="fixed top-0 h-32 w-full bg-white p-5">
        <div className="border-blackflex flex w-full justify-between border-2 p-10 px-20">
          <div className="inline">logo</div>
          <div className="inline">
            <div className="inline pr-10">ikonica</div>
            <div className="inline">ikonica</div>
          </div>
        </div>
      </header>
      <div className="mb-40 mt-40 h-full w-full">
        <div className="w-auto px-5">
          <div className="relative m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="absolute top-8 pl-10 text-left text-4xl font-bold text-gray-500">
              Tops
            </p>
            <a
              className="absolute bottom-8 right-8 z-10 flex justify-center"
              href="./Tops"
            >
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                View all {">>"}
              </button>
            </a>
            <div className="flex h-full w-full pl-40">
              <div className="inline w-1/5 flex-1 border-2 hover:scale-110">
                a
              </div>
              <div className="hover:flex-3 inline flex-1 border-2 hover:scale-110">
                a
              </div>
              <div className="hover:flex-3 inline flex-1 border-2 hover:scale-110">
                a
              </div>
              <div className="hover:flex-3 inline flex-1 border-2 hover:scale-110">
                a
              </div>
              <div className="hover:flex-3 inline flex-1 border-2 hover:scale-110">
                a
              </div>
              <div className="hover:flex-3 inline flex-1 border-2 hover:scale-110">
                a
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Bottoms</p>
            <a className="flex justify-center" href="./Bottoms">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>

        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Dresses</p>
            <a className="flex justify-center" href="./Dresses">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>

        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Outwear</p>
            <a className="flex justify-center" href="./Outwear">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Headwear</p>
            <a className="flex justify-center" href="./Headwear">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Footwear</p>
            <a className="flex justify-center" href="./Footwear">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Accessories</p>
            <a className="flex items-end justify-center" href="./Accessories">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                View all {">>"}
              </button>
            </a>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 flex h-32 w-screen flex-row bg-white">
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
