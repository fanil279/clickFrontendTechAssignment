import CartItem from './CartItem';

const CartList = ({ cart, onRemove }) => (
    <ul>
        {cart.map((item) => (
            <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
            />
        ))}
    </ul>
);

export default CartList;
