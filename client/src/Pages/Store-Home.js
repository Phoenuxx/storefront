import React, { Component } from 'react';
import Navbar from '../Components/navbar';
import SearchBox from '../Components/search-bar';
import CategoryCard from '../Components/categoryCard';
import Footer from '../Components/footer';

const array = [{ product: 'ON DECK EQUIPMENT', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/06/475500_Razer_Hi_Rez-300x300.jpg' },
{ product: 'TEAR OFF TOOLS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/200300tigerrnotchedfulcrum-300x300.jpg' },
{ product: 'PAINTS AND PRIMERS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/06/paint-300x300.jpg' },
{ product: 'SINGLE PLY TOOLS & EQUIPMENT', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/774550_Uniroof_AT-300x300.jpg' },
{ product: 'FALL PROTECTION & ROOF SAFETY', pic: 'https://www.roofmaster.com/wp-content/uploads/2011/07/412315-fallmaster-300x300.jpg' },
{ product: 'PERSONAL PROTECTION & SAFETY', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/413022_HD_cap-300x300.jpg' },
{ product: 'HOISTING EQUIPMENT', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/09/D-Rung-Laddermaster-300x300.jpg' },
{ product: 'DRAINS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/157232_Frank_small_body-300x300.jpg' },
{ product: 'ROOFMASTER KETTLES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/06/531300rm60skid-300x300.jpg' },
{ product: 'MOPS', pic: 'https://www.roofmaster.com/wp-content/uploads/2010/11/158100-red-top-300x300.jpg' },
{ product: 'HAND TOOLS', pic: 'https://www.roofmaster.com/wp-content/uploads/2018/01/Hand-Tools-1-300x300.jpg' },
{ product: 'TIRES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/505055tirergb1-300x300.jpg' },
{ product: 'LADDERS, STAGES & HATCHES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/09/Alum-Ext-Ladder-300x300.jpg' },
{ product: 'MEMBRANES & FLASHINGS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/152040cottonfabric-300x300.jpg' },
{ product: 'SPRAYING SYSTEMS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/06/SPRAYING-SYSTEMS-300x300.jpg' },
{ product: 'VENTS & ROOF ACCESSORIES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/157020exflowm105-300x300.jpg' },
{ product: 'CONVEYORS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/09/638221-return-roller-300x300.jpg' },
{ product: 'REPLACEMENT ENGINES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/690351primasterengine-300x300.jpg' },
{ product: 'LEATHER ACCESSORIES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/06/LEATHER-ACCESSORIES-300x300.jpg' },
{ product: 'CLOSEOUT SPECIALS', pic: 'https://www.roofmaster.com/wp-content/uploads/2019/12/Closeout.jpg' },
{ product: 'NAILS & FASTENERS', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/04/756006nailsrgb-300x300.jpg' },
{ product: 'TRUCK ACCESSORIES', pic: 'https://www.roofmaster.com/wp-content/uploads/2017/06/TRUCK-ACCESSORIES-300x300.jpg' }
];

class Home extends Component {
  render() {
   return (
      <div>
        <Navbar />
        <SearchBox />
        <div className='row category-cont'>
          {array.map((category, i) => {
            return <CategoryCard product={category.product} pic={category.pic} key={i} />
          })
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;