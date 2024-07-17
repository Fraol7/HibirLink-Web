import { create, getByUserId, updateQuantity, deleteCartItem, getCartSummaryByUserId} from "../models/CartItem.js";

const createCartItem = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        const cartItem = await create(userId, productId, quantity);
        res.status(201).json({
            message: "Cart item created successfully",
            cartItem: {
                userId: cartItem.userId,
                productId: cartItem.productId,
                quantity: cartItem.quantity
            }
        });
    } catch (error) {
        console.error('Error creating cart item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getCartItemsByUserId = async (req, res) => {
    const userId = req.params.userId;

    try {
        const cartItems = await getByUserId(userId);

        if (cartItems.length === 0) {
            return res.status(404).json({ message: 'No cart items found for this user.' });
        }

        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getCartSummary = async (req, res) => {
    const userId = req.params.userId;

    try {
        const cartItems = await getCartSummaryByUserId(userId);

        if (!cartItems.length) {
            return res.status(404).json({ message: "No cart items found" });
        }

        let subtotal = 0;

        cartItems.forEach(item => {
            subtotal += item.product_price * item.quantity;
        });

        const shippingFee = subtotal < 200 ? 0 : 10; // Free shipping for orders less than $200
        const total = subtotal + shippingFee;

        res.status(200).json({ cartItems, subtotal, shippingFee, total });
    } catch (error) {
        console.error('Error fetching cart summary:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateCartItem = async (req, res) => {
    const cartItemId = req.params.id;
    const { quantity } = req.body;

    try {
        const updatedCartItem = await updateQuantity(cartItemId, quantity);
        res.status(200).json(updatedCartItem);
    } catch (error) {
        console.error('Error updating cart item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteCart= async (req, res) => {
    const cartItemId = req.params.id;

    try {
        const deletedCartItem =  await deleteCartItem(cartItemId);
        res.status(200).json({message : "Cart deleted successfuly", deletedCartItem});
    } catch (error) {
        console.error('Error deleting cart item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export {createCartItem, getCartItemsByUserId, updateCartItem, getCartSummary, deleteCart};
