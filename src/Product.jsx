const Product = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </p>
      <div className="image-container">
        <img src={props.image} alt={props.title} />
      </div>
      <h2>
        {props.price}
        {props.onSale}
      </h2>
    </div>
  );
};

export default Product;
