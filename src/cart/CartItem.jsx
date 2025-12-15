const CartItem = ({ item, onRemove }) => (
    <li>
        <span>{item.title} - ${item.price}</span>

        <button onClick={() => onRemove(item.id)}>Remove from cart</button>
    </li>
);

export default CartItem;
