import React, { Component } from 'react'

import Layout from './layout/layout'

export default class Index extends Component{
  render(){
    return(
      <Layout>
          
        <h2>View One</h2>

        <a href="/view_1_nested_1" >Nested-View-One</a>
        <span> | </span>
        <a href="/view_1_nested_2" >Nested-View-Two</a>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem ducimus ex harum in nesciunt odio
          ratione rem, 
        </p>
        
        {this.props.children}
          
      </Layout>
    )
  }
}