/** @format */

export const handlePending = (state) => {
  state.isLoading = true;
};

export const setGoods = (state, action) => {
  state.goods = action.payload.data;
  state.isLoading = false;
};

export const handleResolveOrder = (state, action) => {
  state.isLoading = false;
  state.orders.push({order: [...state.basket], date: new Date()});
  state.basket = [];
  alert('delivered')
};

export const handleReject = (state, action) => {
  state.isLoading = false;
}
