export const addItemToCart = (cartItems, itemToAdd) => {

    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        const item = {...existingItem, quantity: existingItem.quantity + 1};

        return [...cartItems.filter(cartItem => cartItem.id !== item.id), item];
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];
};