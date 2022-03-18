import './App.css';

import {Header} from "../Header/Header";
import {ProductList} from "../ProductList/ProductList";
import {Categories} from "../Categories/Categories";
import {Cart} from "../Cart/Cart";

function App() {
  return(
      <>
        <Header />
          <div className="width_80">
              <Cart />
              <div className="width_80_2">
                  <Categories />
                  <ProductList />
              </div>
          </div>

      </>

  );
}

export default App;