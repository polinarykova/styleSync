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
      <div className="mb-40 mt-40 w-full">
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Tops</p>
            <a className="flex justify-center" href="./tops">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Bottoms</p>
            <a className="flex justify-center" href="./bottoms">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>

        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Dresses</p>
            <a className="flex justify-center" href="./dresses">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>

        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Outwear</p>
            <a className="flex justify-center" href="./outwear">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Headwear</p>
            <a className="flex justify-center" href="./headwear">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
        <div className="w-auto px-5">
          <div className="m-2 flex h-44 w-auto flex-col justify-evenly border-2">
            <p className="text-center">Accessories</p>
            <a className="flex justify-center" href="./accessories">
              <button className="mt-auto rounded-md bg-gray-300 p-1">
                See {">>"}
              </button>
            </a>
          </div>
        </div>
      </div>
      <footer className="fixed bottom-0 flex h-32 w-screen flex-row bg-white">
        <div className="flex w-1/2 items-center justify-center">
          <button className="h-12 w-40 rounded-md bg-blue-500">
            Previous Fits
          </button>
        </div>
        <div className="flex w-1/2 items-center justify-center">
          <button className="h-12 w-40 rounded-md bg-blue-500">Drafts</button>
        </div>
      </footer>
    </>
  );
}
