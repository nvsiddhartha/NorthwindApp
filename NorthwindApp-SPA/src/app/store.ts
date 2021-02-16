import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./actions";
import { Order } from "./_models/order";

export interface IAppState {
    order: Order;
}

export const INITIAL_STATE: IAppState = {
    order: JSON.parse(sessionStorage.getItem('cart'))
}

export function rootReducer(state, action): IAppState {
    switch (action.type) {
        case ADD_TO_CART:
            let itemExists = false;
            let ord = state.order;

            if (ord === null) {
                ord = {
                    customerId: '',
                    orderId: 0,
                    employeeId: null,
                    customer: null,
                    employee: null,
                    freight: null,
                    orderDate: null,
                    orderDetails: [],
                    requiredDate: null,
                    shipAddress: null,
                    shipCity: null,
                    shipCountry: null,
                    shipPostalCode: null,
                    shipRegion: null,
                    shipVia: null,
                    shippedDate: null
                };
            }

            ord.orderDetails.map(
                detail => {
                    if (detail.productId === action.item.productId) {
                        itemExists = true;
                        detail.quantity++;
                    }
                }
            );
            if (!itemExists) {
                ord.orderDetails.push(action.item);
            }

            // update sessionStorage
            sessionStorage.setItem('cart', JSON.stringify(ord));

            return Object.assign({}, state, {
                order: ord
            })

        case CLEAR_CART:
        // if (sessionStorage.getItem('cart') != null) {
        //     sessionStorage.removeItem('cart');
        // }

        // return INITIAL_STATE;
    }

    return state;
}