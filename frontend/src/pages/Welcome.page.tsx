export default function () {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-5/6 w-11/12 border-2 border-black">
          <div className="flex flex-row h-full">
            <div className="w-1/2 m-5 h-auto border-2 border-black hover:bg-blue-200 flex justify-center items-end">
              <a href="/home">
                <button className="border-blue-500 bg-blue-400 text-white m-10 p-5 rounded-md">
                  Register
                </button>
              </a>
            </div>
            <div className="w-1/2 m-5 h-auto border-2 border-black  hover:bg-blue-200 flex justify-center items-end">
              <a href="/home">
                <button className="border-blue-500 bg-blue-400 text-white m-10 p-5 rounded-md">
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
