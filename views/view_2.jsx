import React, { Component } from 'react'

import Layout from './layout/layout'

export default class Contact extends Component{
  render(){
    return(
      <Layout>
        
        <h2>View Two</h2>

        <a href="/view_2_nested" >Nested-View</a>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem ducimus ex harum in nesciunt odio
          ratione rem, repellat sint ullam vel vero. Distinctio facilis fugiat ipsam possimus quia.
        </p>

        {this.props.children}

      </Layout>
    )
  }
}