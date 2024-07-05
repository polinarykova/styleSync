import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();

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
          <div className="mt-8 text-center">{category} page</div>
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
}
