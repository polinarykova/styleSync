import { useParams } from "react-router-dom";

export default function () {
  const { category } = useParams();
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        {category} page
      </div>
    </>
  );
}
