import "./ProductDescription.css";
import { useParams } from "react-router-dom";

export const ProductDescription = function () {
  const { productId } = useParams();
  return (
    <>
      <div className="center">{productId}</div>
    </>
  );
};
