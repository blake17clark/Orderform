import React, { Component } from "react";
import {Redirect} from 'react-router-dom'
import '../App.css'

export default class extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",  
        mailingAddress: "",
        city: "",
        state: "",
        zipCode: "",
        payment: "",
        items: ""
    };
                                      //API Express App.post gets body->Mongo JSON
    // handleSubmit = event => {     //this will submit data need more functionality code not done
    //     event.preventDefault();     // fetch function Post-form data
    //     const { redirect, ...submit } = this.state;
    //     if (this.props.login(submit)) {
    //         alert("Successfully Ordered");
    //         this.setState({ redirect: true });



    handleChange = ({ target }) => {
        this.setState( { [target.name]: target.value } );
      };

    render() {
        const title = "Order Form"
        const willDirect = this.state.redirect
        return (
            <fieldset className="center" className="fontsize">
            <legend>{title}</legend>
            <form className="flexbox" onSubmit={this.handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={this.handleChange}
                required
              />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={this.handleChange}
                required
              />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
                required
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                onChange={this.handleChange}
                required
              />
                <input
                type="text"
                placeholder="City"
                name="city"
                onChange={this.handleChange}
                required
              />
                <input
                type="text"
                placeholder="State"
                name="state"
                onChange={this.handleChange}
                required
              />
                <input
                type="number"
                placeholder="Zip Code"
                name="zipCode"
                onChange={this.handleChange}
                required
              />
            <input
                type="tel"
                placeholder="Phone"
                name="phone"
                onChange={this.handleChange}
                required
              />
            <input
                type="text"
                placeholder="Payment"
                name="payment"
                onChange={this.handleChange}
                required
              />
            <input
                type="text"
                placeholder="Items"
                name="items"
                onChange={this.handleChange}
                required
              />  
              <br/>            
              <button className="button" type="submit">Submit</button>
            </form>


            </fieldset>
            
        )
    }

}

