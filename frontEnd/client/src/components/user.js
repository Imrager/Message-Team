import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

// class user extends Component {
//     state = {
//        user: {}, 
//     };

// componentDidMount = () => {
//     axios.get(`//${this.props.match.params.id}`, this.state.user).then(res => {
//         this.setState({user: res.data, isEditFormDisplayed: false})
//     })
// }

// createUser = () => {
//     axios.post('', {
//       description: this.state.user,
//       item: this.state.user.email,
//       item: this.state.user.username,
//       item: this.state.user.password
//     });
// };


// export default user;