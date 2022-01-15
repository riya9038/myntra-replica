import React from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { addToWishlist } from '../actions';
import { toast } from 'react-toastify';
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';

const Product = (props) => {
    const { name, price,brand, description, image, id } = props.product;
    
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/productDetails", {state:{product:props.product}});
    }

    const handleWishlist = () => {
        toast.success("Product added to wishlist")
        props.dispatch(addToWishlist(props.product, "38"));
    }

    const { handleViewSimilar, handleRemoveFromWishlist, handleRemoveFromBag } = props;
    const { isViewSimilar, isBag, isWishList, isProducts, isFilter } = props.state;
    return (
        <div className="product_container">                
            <div className="product_image">
                <img src={image} onClick={ () => isBag || isWishList ? " " : handleClick() } />
               { (isProducts || isFilter || isBag || isWishList) && <div className="view_similar" onClick={ () => handleViewSimilar(brand) } ><p>view similar</p></div> }
               { !isWishList && <div className="wishlistOption" onClick={ () => handleWishlist() } ><FaHeart /></div>}
            </div>
            <div className="product_details">
                <div className="product_name" >{name}</div>
                <div className="product_desc">{description}</div>
                <div className="product_price"> Rs. {price}</div>
                { props.state.isWishList && <div>Size:{props.product.size}</div> }
                { props.state.isWishList && <div className="remove_btn" onClick={ () => handleRemoveFromWishlist(id) } >Remove</div> }
                { props.state.isBag && <div>Size:{props.product.size}</div> }
                { props.state.isBag && <div className="remove_btn" onClick={ () => handleRemoveFromBag(id) } >Remove</div> }
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(Product);

