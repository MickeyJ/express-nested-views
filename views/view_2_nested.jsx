import React, { Component } from 'react'

import Contact from './view_2'

export default class ContactNested extends Component{
  render(){
    return(
      <Contact>

       <main>
         <h3>Nested View</h3>

         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt neque, odit! A commodi corporis deleniti
           dolore dolorum est inventore laboriosam laudantium molestiae natus non nostrum officiis praesentium, quo
           similique veniam.
         </div>
         <div>Doloremque facere, libero magni neque nobis officia officiis placeat possimus quas ratione repudiandae
           vitae? Accusamus consequuntur cumque doloremque doloribus ea excepturi illum, magni quas qui quia ratione
           veritatis vero voluptas.
         </div>
         <div>Accusantium aspernatur, blanditiis corporis dolor dolorum eius, eligendi labore necessitatibus neque odio
           perspiciatis quo quos sed. Aliquam debitis deleniti deserunt dolorum facere fuga, magnam, porro, quia ratione
           reiciendis vero voluptates!
         </div>
       </main>

      </Contact>
    )
  }
}