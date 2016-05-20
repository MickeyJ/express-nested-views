import React, { Component } from 'react'

import Index from './view_1'

export default class IndexNestedOne extends Component{
  render(){
    return(
      <Index>

        <main>
          <h3>Nested View One</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequuntur cum earum enim explicabo
            illum nesciunt perspiciatis tempora vero? Adipisci consequuntur doloribus excepturi ipsum iste nulla omnis.
            Dicta, voluptatibus!
          </p>
          <p>Deserunt dolore esse hic impedit mollitia nesciunt quibusdam sapiente sunt. Ab cum cumque, cupiditate eum
            ipsam magnam molestias neque nihil, obcaecati possimus quae quod sint tempora ullam veritatis voluptas,
            voluptatibus?
          </p>
          <p>Distinctio illo magnam odio ut voluptas. Accusamus animi assumenda atque explicabo in maxime modi nulla
            placeat quas sunt. Aut molestias necessitatibus quia? Assumenda, ipsa libero officia perspiciatis
            reprehenderit ullam veritatis.
          </p>

          <a href="/double_nested_one" >Double-Nested-One</a>
          <span> | </span>
          <a href="/double_nested_two" >Double-Nested-Two</a>

          {this.props.children}
        </main>

      </Index>
    )
  }
}