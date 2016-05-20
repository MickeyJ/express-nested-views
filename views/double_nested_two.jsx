import React, { Component } from 'react'

import IndexNestedOne from './view_1_nested_1'

export default class DoubleNestedTwo extends Component{
  render(){
    return(
      <IndexNestedOne>

        <main>
          <h4>Double Nested Two</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
            nostrum odio quasi sapiente. Ad adipisci aliquam cum dolores ea excepturi fugit
            Accusantium, nemo quisquam. Asperiores corporis cumque harum in possimus quam sequi
            numquam similique voluptatum? Debitis magni officiis repellendus unde. Aperiam hic
            quos? Aut commodi enim iusto laboriosam molestiae mollitia
            similique! Architecto excepturi inventore omnis. Fugit nemo nesciunt non quo.
            officia quaerat voluptatibus. Alias commodi consectetur, cum doloribus
          </p>
        </main>

      </IndexNestedOne>
    )
  }
}