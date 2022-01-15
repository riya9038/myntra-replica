
import React from "react";
import Filter from "./Filter";
import Product from "./Product";
import products from "../data.json";
import { connect } from "react-redux";
import { lowToHigh, highToLow, viewSimilar, removeFromWishlist, removeFromBag, normalDisplay,items } from '../actions/index';
import {toast} from 'react-toastify';

class Home extends React.Component{

    
    componentDidMount() {

        //bag
        this.props.dispatch(items(products));
        let localBagProduct = JSON.parse(localStorage.getItem('bag'));
        let bagProducts= localBagProduct ? localBagProduct : [];
        localStorage.setItem('bag', JSON.stringify(bagProducts));

        //wishlist
        let localWishlistProduct = JSON.parse(localStorage.getItem('wishlist'));
        let wishlistProducts = localWishlistProduct ? localWishlistProduct : [];
        localStorage.setItem('wishlist', JSON.stringify(wishlistProducts));
        
    }
    
    handleSortLowToHigh = (products) => {
        this.props.dispatch(lowToHigh(products));
    }

    handleSortHighToLow = (products) => {
        this.props.dispatch(highToLow(products));
    }

    handleViewSimilar = (brand) => {
        console.log("brand", brand);
        this.props.dispatch(viewSimilar(brand));
    }

    handleRemoveFromWishlist = (id) => {
        toast.success("Product removed from wishlist")
        this.props.dispatch(removeFromWishlist(id));
    }

    handleRemoveFromBag = (id) => {
        toast.success("Product removed from the bag")
        this.props.dispatch(removeFromBag(id));
    }

    handleNormalDisplay = () => {
        this.props.dispatch(normalDisplay());
    }
    handleClearAll=()=>{
        window.location.reload();
    }
    
render(){
    const { products, sorted_products, wishList, bag,  isSorted, isProducts, isWishList, isBag, isSearch, search, isViewSimilar, viewSimilar, isFilter, filter  } = this.props.state;
        const displayProducts = isSorted ? sorted_products : isWishList ? wishList : isBag ? bag : isSearch ? search : isViewSimilar ? viewSimilar : isFilter ? filter: products.products;
        console.log("products",displayProducts)
        const renderProducts= displayProducts? displayProducts:[];
        
    return(
        
        <main>
            <div className="heading">
            <p>
                Home/Clothing/ <b>Shirts For Men and Women</b>
            </p>
            <p>
                <b>Shirts for men and women</b>
            </p>
            <div className="heading-list">
            <ul className="sub-heading1">
                <li>
                    <b>FILTERS</b>
                </li>
                <li>
                    <div className="clear" onClick={()=>this.handleClearAll()}>Clear All</div>
                </li>
            </ul>
            <ul className="sub-heading2">
                <li>
                    Add ons
                </li>
                <li>
                    Better Cotton Initiative
                </li>
                <li>
                    Bundles
                </li>
                <li>
                    Character
                </li>
                <li>
                    Collar
                </li>
                <li>
                    Country of Origin
                </li>
                <li>
                    Fabric
                </li>
                <li>
                    <b>+17 more</b>
                </li>
            </ul>
            <div className="sort">
                <span>Sort:Price Recommended</span>
                <div onClick={ () => this.handleSortLowToHigh(products.products) }>Low To High</div>
                <div onClick={ () => this.handleSortHighToLow(products.products) }>High To Low</div>
            </div>
            </div>
            </div>
            <div className="main">
                <Filter />
                {renderProducts.length > 0 ? <div className="products_page">
                    {
                        renderProducts.map(prod => <Product product={prod} key={prod.id} handleViewSimilar={this.handleViewSimilar} handleRemoveFromWishlist={this.handleRemoveFromWishlist} handleRemoveFromBag={this.handleRemoveFromBag}  /> )
                    }
                </div> : 
                <div className="add_products">
                    <div className="add_products_title">
                        <p>Nothing is Present, Please add products!</p>
                    </div>
                    <button className="add-btn" onClick={ () => this.handleNormalDisplay() }>ADD
                    </button>
                </div> 
                }
            </div>
        </main>
    )
    }
}
function mapStateToProps(state) {
    return {
      state,
    };
}
  

export default connect(mapStateToProps)(Home);