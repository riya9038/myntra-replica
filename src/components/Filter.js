import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showFilter } from '../actions/index';

class Filter extends Component {

    constructor(props){
        super(props);
        this.state={
            gender:"",
            price:[],
            brand:[],
        }
    }

    handleBrand = (e) => {
        if(e.target.checked){
            console.log("clicked",e.target.value)
            
            this.setState({
                brand:[...this.state.brand, e.target.value],
            })
            console.log("brand",this.state.brand);
        }else{
            console.log("unclicked",e.target.value)
            const newBrand = this.state.brand.filter(elem => elem != e.target.value);
            this.setState({
                brand:newBrand,
            })
        }

    }

    handlePrice = (e) => {
        if(e.target.checked){
            this.setState({
                price:[...this.state.price, e.target.value],
            })
        }else{
            const newPrice = this.state.price.filter(elem => elem != e.target.value);
            this.setState({
                price:newPrice,
            })
        }
    }

    handleGender = (e) => {
        console.log("clicked",e.target.value)
        this.setState({
            gender:e.target.value,
        })
    }

    handleShowFilter = () => {
        const { gender, brand, price } = this.state;
        if(gender != "" || price.length != 0 || brand.length != 0){
            this.props.dispatch(showFilter(gender, brand, price));
            this.setState({
                gender:"",
                brand:[],
                price:[],
            })
        }
        
    }

    render() {
        return (
            <div className="sidebar">
                <div className="filter" onClick={ () => this.handleShowFilter() }>APPLY</div>
                <section>
                    <div >
                    <p> <b>GENDER</b></p>
                    <input type="radio" name="gender" value="men" onChange={ (e) => this.handleGender(e) }></input>
                    <label for="gender">Men</label>
                    </div>
                    <div>
                    <input type="radio" name="gender" value="women" onChange={ (e) => this.handleGender(e) }></input>
                    <label for="gender">Women</label>
                    </div>
                    <div>
                    <input type="radio" name="gender" value="boys" onChange={ (e) => this.handleGender(e) }></input>
                    <label for="gender">Boys</label>
                    </div>
                    <div>
                    <input type="radio" name="gender" value="girls" onChange={ (e) => this.handleGender(e) }></input>
                    <label for="gender">Girls</label>
                    </div>
                </section>

                <section>
                    <div >
                    <p> <b>BRAND</b></p>
                    <input type="checkbox" name="brand" value="allen solly" onChange={ (e) => this.handleBrand(e) }></input>
                    <label for="brand">Allen Solly</label>
                    </div>
                    <div>
                    <input type="checkbox" name="brand" value="highlander" onChange={ (e) => this.handleBrand(e) }></input>
                    <label for="brand">Highlander</label>
                    </div>
                    <div>
                    <input type="checkbox" name="brand" value="roadster" onChange={ (e) => this.handleBrand(e) }></input>
                    <label for="brand">Roadster</label>
                    </div>
                    <div>
                    <input type="checkbox" name="brand" value="louis philippe" onChange={ (e) => this.handleBrand(e) }></input>
                    <label for="brand">Louis Philippe</label>
                    </div>
                </section>

                <section>
                    <div>
                    <p><b> PRICE</b></p>
                    <input type="checkbox" name="price" value="low" onChange={ (e) => this.handlePrice(e) }></input>
                    <label for="price">Rs.300 to Rs.3999</label>
                    </div>
                    <div>
                    <input type="checkbox" name="price" value="medium" onChange={ (e) => this.handlePrice(e) }></input>
                    <label for="price">Rs.4000 to Rs.6999</label>
                    </div>
                    <div>
                    <input type="checkbox" name="price" value="high" onChange={ (e) => this.handlePrice(e) }></input>
                    <label for="price">Rs.7000 to Rs.9999</label>
                    </div>
                    <div>
                    <input type="checkbox" name="price" value="higher" onChange={ (e) => this.handlePrice(e) }></input>
                    <label for="price">Rs.10000 to Rs.13999</label>
                    </div>
                </section>
                
            </div>
                
        )
    }
}

function mapStateToProps(state) {
    return {
      state,
    };
}

export default connect(mapStateToProps)(Filter);
