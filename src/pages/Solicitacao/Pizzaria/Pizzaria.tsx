import { useParams } from "react-router-dom";

export const Pizzaria: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="bg-amber-300 justify-items-center">
      <h1 className="text-blue-500 uppercase">Pizzaria: {id} </h1>
    </div>
  );
};
