

import React from 'react'


/*
*header 
 -logo
 -nav

*body
 -search 
 -Restaurant containe  
      -RestaurantCards
           --img
           --Name of Restaurant
           --Price
           --Star rating
           --Cuisines


*footer
  -Copyright
  -Links
  -Address
  -Contact
 */

  const Header = () =>{
    return (
      <div className='header'>
        <div className='logo-container'>
      <img className='logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" alt="" />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>

      </div>

    )
  }
  const RestaurantCard = (props) =>{
    const {resName,cuisine} = props
 
     
     return (
       <div className='res-card'  style={{backgroundColor: "#f0f0f0"}}>
         <img className='res-logo' src="https://b.zmtcdn.com/data/pictures/chains/1/50691/96f5b8c9334548312fe1175c711be46e.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="res-logo " />
         <h3>{resName}</h3>
         <h4>{cuisine}</h4>
         <h4>{}</h4>
         <h4>{}</h4>
 
       </div>
     )
   }
  const Body = () =>{
    return (
      <div className='body'>
        <div className='search'>
      Search
        </div>
        <div className='res-container'>
      <RestaurantCard  resName="Meghana foods" cuisine="Biriyani,North India,Asian" stars="4.4 stars"/>
      <RestaurantCard resName="KFC" cuisine="Burger,Fast Food"/>
    
        </div>
      </div>
    )
  }


  const AppLayout = ()=>{
    return (
      <div className='app'>
        <Header />
        <Body/>

      </div>
    )
  }

export default AppLayout;