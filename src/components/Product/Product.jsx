const Product = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.tags.map((tag) => (
          <span key={tag}>{tag} </span>
        ))}
      </p>
      <h2>
        {props.price}
        {props.onSale}
        {props.discount}
      </h2>
      <div className="image-container">
        <img src={props.image} alt={props.title} />
      </div>
    </div>
  );
};

export default Product;
