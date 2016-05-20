import React, { Component } from 'react'

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <head>
          <title>express-nested-views</title>
          <meta name="HandheldFriendly" content="true" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="stylesheet" href="css/style.css" />
        </head>
        <body>

          <h1>Layout</h1>
          
          <nav>
            <a href="/" >View-One</a>
            <span> | </span>
            <a href="/view_2" >View-Two</a>
          </nav>

          <main>
            {this.props.children}
          </main>

        </body>
      </html>
    )
  }
}