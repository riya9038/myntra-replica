export const PRODUCTS="PRODUCTS";
export const LOW_HIGH="LOW_HIGH";
export const HIGH_LOW="HIGH_LOW";
export const NORMAL="NORMAL";
export const ADD_TO_WISHLIST="ADD_TO_WISHLIST";
export const SHOW_WISHLIST="SHOW_WISHLIST";
export const SEARCH="SEARCH";
export const VIEW_SIMILAR="VIEW_SIMILAR";
export const REMOVE_FROM_WISHLIST="REMOVE_FROM_WISHLIST";
export const ADD_TO_BAG="ADD_TO_BAG";
export const REMOVE_FROM_BAG="REMOVE_FROM_BAG";
export const SHOW_BAG="SHOW_BAG";
export const FILTER="FILTER";


//to dispatch all the products
export function items(products){
    return {
        type:PRODUCTS,
        products,
    }
}
//to sort the products in increasing order
export function lowToHigh(products){
    return{
        type:LOW_HIGH,
        products,
    }
}
//to sort the products in decreasing order
export function highToLow(products){
    return{
        type:HIGH_LOW,
        products,
    }
}
//to dispatch the home page
export function normalDisplay(){
    return{
        type:NORMAL,
    }
}
//to add products to the wishlist
export function addToWishlist(product, size){
    product.size=size;
    return{
        type:ADD_TO_WISHLIST,
        product,
    }
}
//to show the wishlist
export function showWishlist(){
    return{
        type:SHOW_WISHLIST,
    }
}
//to search a product
export function search(name){
    return{
        type:SEARCH,
        name,
    }
}
//to show similar products
export function viewSimilar(brand){
    return{
        type:VIEW_SIMILAR,
        brand,
    }
}
//to remove the product from wishlist
export function removeFromWishlist(id){
    return{
        type:REMOVE_FROM_WISHLIST,
        id,
    }
}
//to add the product in the bag
export function addToBag(product, size){
    product.size=size;
    return{
        type:ADD_TO_BAG,
        product,
    }
}
//to remove the product from the bag
export function removeFromBag(id){
    return{
        type:REMOVE_FROM_BAG,
        id,
    }
}
//to show the products in the bag
export function showBag(){
    return{
        type:SHOW_BAG,
    }
}
//to show the filtered products
export function showFilter(gender, brand, price){
    return{
        type:FILTER,
        gender,
        brand,
        price,
    }
}
