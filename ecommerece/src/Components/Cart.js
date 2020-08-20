import React, { Component } from 'react'
import axios from 'axios'
import './CSS/men.css'
// import {BrowserHistory} from 'react-router'
import './CSS/choice.css'
import './CSS/home.css'
import { shoes, dress } from './../redux/Action/actioncreator'
import { connect } from 'react-redux'


//  statefull Component
class Cart extends Component {
    total=0
    constructor(props) {
        super(props)
    }

    shop() {
        this.props.history
            .push(`/choice/${this.props.match.params.FullName}`)
    }

    checkout() {
        this.total=this.total/2
        this.props.history
            .push(`/check/${this.props.match.params.FullName}/${this.total}`)

    }
    render() {
        let MenDressData
        let MenShoeData
        let WomenDressData
        let WomenShoeData
        let ChildrenDressData
        let ChildrenShoeData
      
       

        // in this section, we are getting data from redux and displaying on web page

        if (this.props.mendress.length > 0) {
            MenDressData = <div>
                <b>Men's Dresses</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                            <th>Price Per Item</th>
                            <th>Total Price</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.mendress[0].map(p =>
                               
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                   
                                   
                                    <p className="sum">{this.total= this.total + p.quantity * p.price}</p>
                                    </tr>
                                    
                                
                            )
                        }
                    </tbody>
                </table>
                </div>
              
        }
        if (this.props.menshoes.length > 0) {
            MenShoeData = <div>
                <b>Men's Shoes</b>
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>QUANTITY</th>
                          <th>Price Per Item</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.menshoes[0].map(p =>
                               
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                    <p className="sum">{this.total=this.total + p.quantity * p.price}</p>
                                    </tr>
                            )
                        }
                    </tbody>
                </table></div>
           }
        if (this.props.womendress.length > 0) {
            WomenDressData = <div>
                <b>Women's Dresses</b>
                <table className="table">
                    <thead>
                        <tr>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                      <th>Price Per Item</th>
                        <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.womendress[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                    <p className="sum">{this.total=this.total + p.quantity * p.price}</p>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
            
        }
        if (this.props.womenshoes.length > 0) {
            WomenShoeData = <div>
                <b>Women's Shoes</b>
                <table className="table">
                    <thead>
                        <tr>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                      <th>Price Per Item</th>
                        <th>Total Price</th>  </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.womenshoes[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                    <p className="sum">{this.total=this.total + p.quantity * p.price}</p>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.childrendress.length > 0) {
            ChildrenDressData = <div>
                <b>Children's Dresses</b>
                <table className="table">
                    <thead>
                        <tr>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                      <th>Price Per Item</th>
                        <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.childrendress[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                    <p className="sum">{this.total=this.total + p.quantity * p.price}</p>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        if (this.props.childrenshoes.length > 0) {
            ChildrenShoeData = <div>
                <b>Children's Shoes</b>
                <table className="table">
                    <thead>
                        <tr>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                      <th>Price Per Item</th>
                        <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.childrenshoes[0].map(p =>
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.quantity}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity * p.price}</td>
                                    <p className="sum">{this.total=this.total + p.quantity * p.price}</p>
                                </tr>
                            )
                        }
                    </tbody>
                </table></div>
        }
        return (
            <div>
            <h1>Your Cart is ready</h1> <br/><br/><br/>
            
 {MenDressData}
                {MenShoeData}
               {WomenDressData}
                {WomenShoeData}
                {ChildrenDressData}
                {ChildrenShoeData}<br /><br /><br />
             <b> Your Cart value is :  {this.total}</b>
                <br /><br /><br />
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                        <button className="choice  btn btn-dark" onClick={this.shop.bind(this)}>Continue Shopping</button>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                        <button className=" choice btn btn-dark" onClick={this.checkout.bind(this)}>Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}
// fetching  data from redux and mapping to component
const mapStateToProps = state => {
    return {
        menshoes: state.menshoes,
        mendress: state.mendress,
        womenshoes: state.womenshoes,
        womendress: state.womendress,
        childrenshoes: state.childrenshoes,
        childrendress: state.childrendress
    }
}

const mapdispatchToProps = dispatch => {
    return {
        // addshoes:(d)=>dispatch(shoes(d)),
        // adddress:(d)=>dispatch(dress(d))
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Cart)

