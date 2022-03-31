import "./Promotions.css";
import { Link, Outlet } from "react-router-dom";
import { promotions } from "../../promotions";

export const Promotions = function () {
  return (
    <>
      <h1 className="center">Nos promotions du moment</h1>
      <table className="promotions-table">
        <tbody>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Description</th>
          </tr>
          {promotions.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link to={"/description/" + product.id}>Voir description</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
