import CartItem from './CartItem';

const CartList = ({ cart, onRemove }) => (
    <ul>
        {cart.map((item) => (
            <CartItem
                key={item.cartId}
                item={item}
                onRemove={onRemove}
            />
        ))}
    </ul>
);

export default CartList;
