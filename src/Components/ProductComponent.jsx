import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div 
      
      className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div
          style={{marginTop : "5px",height : "400px"}}
          className="ui link cards">
            <div className="card">
              <div className="image">
                <img style={{height : "300px" ,objectFit : "contain"}} src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title.length > 20 ? title.substr(0, 20) + "..." : title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
