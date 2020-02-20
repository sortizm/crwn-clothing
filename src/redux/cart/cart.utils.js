export const addItemToCart = (cartItems, itemToAdd) => {

    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(item =>
            item.id === itemToAdd.id ?
                {...itemToAdd, quantity: item.quantity + 1}
                : item
        );
    }

    return [...cartItems, {...itemToAdd, quantity: 1}];
};

export const removeItem = (cartItems, itemToDecrease) => {

    if (itemToDecrease.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToDecrease.id);
    } else {
        return cartItems.map(item =>
            item.id === itemToDecrease.id ?
                {...itemToDecrease, quantity: item.quantity - 1}
                : item
        )
    }
};
