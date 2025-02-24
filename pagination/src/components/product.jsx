export default function Product({ title, thumbnail,price }) {
    return(
        <div className="product-card">
            <img className="product-image" src={thumbnail} alt={title} />
            <span>{title}</span>
            <span>{price}</span>
        </div>
    )
}