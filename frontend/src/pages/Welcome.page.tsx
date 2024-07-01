export default function () {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="h-5/6 w-11/12 border-2 border-black">
          <div className="flex h-full flex-row">
            <div className="m-5 flex h-auto w-1/2 items-end justify-center border-2 border-black hover:bg-blue-200">
              <a href="/home">
                <button className="m-10 rounded-md border-blue-500 bg-blue-400 p-5 text-white">
                  Registers
                </button>
              </a>
            </div>
            <div className="bolder-2 m-5 flex h-auto w-1/2 items-end justify-center border-black hover:bg-blue-200">
              <a href="/home">
                <button className="m-10 rounded-md border-blue-500 bg-blue-400 p-5 text-white">
                  Sign In
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
