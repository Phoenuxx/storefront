import React from 'react';
import Logo from '../Utils/images/Roofmaster-logo.png';
import List from './categoryList';

const products = ['Closeout Specials', 'Conveyors', 'Drains', 'Fall Protection & Roof Safety', 'Hand Tools',
  'Hoisting Equipment', 'Ladders, Stages & Hatches', 'Leather Accessories', 'Membranes & Flashings',
  'Mops', 'Nails & Fasteners', 'On Deck Equipment', 'Paints and Primers', 'Personal Protection & Safety',
  'Replacement Engines', 'Roofmaster Kettles', 'Single Ply Tools & Equipment', 'Spraying Systems',
  'Tear Off Tools', 'Tires', 'Truck Accessories', 'Uncategorized', 'Vents & Roof Accessories']

const categories = [
  { cat: 'Closeout Special', sub: [] },
  { cat: 'Conveyors', sub: ['FBR Conveyor Parts', 'HASDF Conveyor Parts', 'Other Conveyor Parts', 'Turntables & Outriggers'] },
  { cat: 'Drains', sub: ['Combo/Overflow Drains', 'Copper Roof Drains', 'Large Sump Cast Iron Drains', 'Plastic Roof Drains', 'Scuppers, Deck, Misc Drains', 'Side Outlet Drains', 'Small Sump Cast Iron Drains'] },
  { cat: 'Fall Protection & Roof Safety', sub: ['Fall Arrest', 'Perimeter Warning & Roof Edge', 'Roof Anchors'] },
  { cat: 'Hand Tool', sub: ['Brooms & Brushes', 'Knives & Blages', 'Hatchets & Hammers', 'Caulking Guns & Loaders', 'Scissors & Snips', 'Trowels & Squeegees', 'Axes & Pry Bars', 'Measuring Tools', 'Ropes', 'Powered Hand Tools', 'Shingle & Slate Cutters', 'Soldering Tools For Seams'] },
  { cat: 'Hoisting Equipment', sub: ['Hosting Wheels', 'Non-Powered Roof Hoists', 'Powered Hoisting Equipment', 'Powered Accesory', 'Gravel Bucket / Hoisting Fork', 'Hoist Parts / Powered / Hand'] },
  { cat: 'Ladders, Stages & Hatches', sub: ['Ladders', 'Ladder Accessories', 'Roof Brackets', 'Ladder Hatches', 'Aluminum Stages'] },
  { cat: 'Leather Accessories', sub: ['Knee Pads', 'Nail Bafs And Belts', 'Tool Holders'] },
  { cat: 'Membranes & Flashings', sub: ['Irish Felt', 'Black & Yellow Glass Fabric', 'Cotton Fabric', 'U Seal Brand & Special Tape'] },
  { cat: 'Mops', sub: ['Super Spread Fiberglass Mops', 'Red Top Fiberglass Mops', 'Fiberglass Applicate Mops', 'Cotton Mops', 'Roller Mops & Frames', 'Mop Rings', 'Mop Hardware', 'Mop Handles'] },
  { cat: 'Nails & Fasteners', sub: ['Base Ply Fasteners', 'Button Kap', 'Concrete Fasteners & Nailins', 'Deck Screws', 'Discs, Slate Hooks & Other', 'Fastening Tools', 'Low Density Deck Fastener', 'Low Density Fastener - Tube Lok', 'Nail Strippers', 'Nails', 'Spikes & Carbide Bits', 'Term Bar'] },
  { cat: 'On Deck Equipment', sub: ['Powered', 'Non Powered'] },
  { cat: 'Paint and Primers', sub: ['Flashing Paint', 'Asphalt Based Primer', 'Spray Paint'] },
  { cat: 'Personal Protection & Safety', sub: ['Gloves', 'Cleaners, Solvents & Water Cool', 'Disposal & Containment', 'First Aid & Burn Kit', 'Fire Extinguihser'] },
  { cat: 'Replacement Engines', sub: ['Kettle Engine Replacement Part', 'Replacement Engine For Sprayer', 'Replacement Kettle Engine'] },
  { cat: 'Roofmaster Kettles', sub: ['Kettles', 'Kettle Accessories', 'Kettle Repairs Parts', 'Tanker Pumps & Accessories'] },
  { cat: 'Single PLy Tools & Equipment', sub: ['Hot Air Welders', 'Generators', 'Adheisve Rollers And Frames', 'Rollers, Steel And Rubber', 'Single Ply Scissors & Testers', 'Modified Bitumen Lp Torches', 'Lpg Tanks & Hoses', 'Material & Hose Clamps'] },
  { cat: 'Spraying Systems', sub: ['Roof Rigs', 'Small Pump Systems', 'Granule Pump Systems', 'Granule Master', 'Pole Guns & Hoses', 'Spray Tips', 'Glass Choppers', 'Pail Warmer', 'Spray Material Valves', 'Swivel Adaptors For Spray Hoses', 'Sprayu Pump Parts', 'Hand Sprayers & Mixers', 'Warmmaster'] },
  { cat: 'Tear Off Tools', sub: ['Tear Off Spade', 'Scoop Shovels', 'Tear Off Bars - Built Up Roof', 'Tear  Off Bars - Shingle', 'Tarps', 'Trash Chutes'] },
  { cat: 'Tires', sub: ['Non-Flat Lite Foam Filled', 'Pneumatic Tires & Wheels'] },
  { cat: 'Truck Accessories', sub: ['Cargo Straps For Truck Tie Down', 'Winch Bar For Truck Tie Down'] },
  { cat: 'Uncategorized', sub: [] },
  { cat: 'Vents & Roof Accessories', sub: ['Vents', 'Commdeck', 'Paver Supports', 'Expansion Joints', 'Pipe Stands & Specs', 'Solar'] }
]

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
      {/*Link to Roofmaster home page in new tab*/}
      <a className="navbar-brand" href="https://www.roofmaster.com/" target="_blank" ><img src={Logo} id="roofmaster-logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/*everything below is collapsible when screen size restrictions are met */}
      <div className="collapse navbar-collapse menu-items" id="navbarSupportedContent" >
        <ul className="navbar-nav">

          {/*Link to current page*/}
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          {/*Dropdown for various products*/}
          <div className="nav-item dropdown small-screen-toggle">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             <List class=''/>
            </div>
          </div>
        </ul>

      </div>

    </nav>
  )
}

