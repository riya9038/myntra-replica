import React from "react";
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { normalDisplay } from '../actions';
import { connect } from 'react-redux';
// import logo from '../images/logo.png';
import { showWishlist, search, showBag } from '../actions/index';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            display_selection:true,
            display_profile:false,
            searchProducts:"",
        }
    }
    handleDisplaySelection = () => {
        this.setState({
            display_selection:!this.state.display_selection,
        })
    }
    handleDisplayProfile = () => {
        this.setState({
            display_profile:!this.state.display_profile,
        })
    }

    handleNormalDisplay = () => {
        this.props.dispatch(normalDisplay());
    }

    handleShowWishlist = () => {
        this.props.dispatch(showWishlist());
        this.setState({
            display_profile:false,
        })
    }

    handleSearch = (e) => {
        if(e.key === 'Enter'){
            this.props.dispatch(search(this.state.searchProducts));
            this.setState({
                searchProducts:"",
            })
        }
    }

    handleShowBag = () => {
        this.props.dispatch(showBag());
        this.setState({
            display_profile:false,
        })
    }
    render(){
    return (
        <div className="nav">
            <div className="menu">
            <Link to="/"><img src="https://images.indianexpress.com/2021/01/myntra.png" 
                alt="menu" onClick={ () => this.handleNormalDisplay() }/></Link>
                <ul className="list">
                    <li>
                        MEN
                    </li>
                    <li>
                        WOMEN
                    </li>
                    <li>
                        KIDS
                    </li>
                    <li>
                        HOME AND LIVING
                    </li>
                    <li>
                        BEAUTY
                    </li>
                </ul>
            </div>
            <div className="search">
                <FaSearch className="search_icon"/>
                <input type="text" placeholder="search for products" onChange={ (e) => this.setState({searchProducts:e.target.value}) }
                        onKeyPress={ (e) => this.handleSearch(e) }/>
            </div>
            <div className="user">
                <div className="profile">
                    <div><FaUser /></div>
                    <div className="title">Profile</div>
                </div>
                <div className="wishlist-icon" onClick={ () => this.handleShowWishlist() }>
                    <div><FaHeart /></div>
                    <div className="title" >Wishlist</div>
                </div>
                <div className="bag-icon" onClick={ () => this.handleShowBag() }>
                    <div><FaShoppingBag /></div>
                    <div className="title">Bag</div>
                </div>
            </div>
            <div className="bars">
                        <FaBars onClick={ () => this.handleDisplayProfile() } />
                        {
                            this.state.display_profile &&
                            <div className="show_profile">
                                <div onClick={ () => this.handleShowWishlist() }>
                                    <div><FaHeart /></div>
                                    <div className="title">Wishlist</div>
                                </div>
                                <div onClick={ () => this.handleShowBag() }>
                                    <div><FaShoppingBag /></div>
                                    <div className="title">Bag</div>
                                </div>
                            </div>
                        }
                    </div>
        </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      state,
    };
}
  

export default connect(mapStateToProps)(Navbar);