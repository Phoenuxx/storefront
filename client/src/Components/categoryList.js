import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { cat: 'Closeout Special', sub: [] },
  { cat: 'Conveyors', sub: ['FBR Conveyor Parts', 'HASDF Conveyor Parts', 'Other Conveyor Parts', 'Turntables & Outriggers'] },
  { cat: 'Drains', sub: ['Combo & Overflow Drains', 'Copper Roof Drains', 'Large Sump Cast Iron Drains', 'Plastic Roof Drains', 'Scuppers, Deck, Misc Drains', 'Side Outlet Drains', 'Small Sump Cast Iron Drains'] },
  { cat: 'Fall Protection & Roof Safety', sub: ['Fall Arrest', 'Perimeter Warning & Roof Edge', 'Roof Anchors'] },
  { cat: 'Hand Tool', sub: ['Brooms & Brushes', 'Knives & Blages', 'Hatchets & Hammers', 'Caulking Guns & Loaders', 'Scissors & Snips', 'Trowels & Squeegees', 'Axes & Pry Bars', 'Measuring Tools', 'Ropes', 'Powered Hand Tools', 'Shingle & Slate Cutters', 'Soldering Tools For Seams'] },
  { cat: 'Hoisting Equipment', sub: ['Hosting Wheels', 'Non-Powered Roof Hoists', 'Powered Hoisting Equipment', 'Powered Accesory', 'Gravel Bucket & Hoisting Fork', 'Hoist Parts'] },
  { cat: 'Ladders, Stages & Hatches', sub: ['Ladders', 'Ladder Accessories', 'Roof Brackets', 'Ladder Hatches', 'Aluminum Stages'] },
  { cat: 'Leather Accessories', sub: ['Knee Pads', 'Nail Bafs And Belts', 'Tool Holders'] },
  { cat: 'Membranes & Flashings', sub: ['Irish Felt', 'Black & Yellow Glass Fabric', 'Cotton Fabric', 'U Seal Brand & Special Tape'] },
  { cat: 'Mops', sub: ['Super Spread Fiberglass Mops', 'Red Top Fiberglass Mops', 'Fiberglass Applicate Mops', 'Cotton Mops', 'Roller Mops & Frames', 'Mop Rings', 'Mop Hardware', 'Mop Handles'] },
  { cat: 'Nails & Fasteners', sub: ['Base Ply Fasteners', 'Button Kap', 'Concrete Fasteners & Nailins', 'Deck Screws', 'Discs, Slate Hooks & Other', 'Fastening Tools', 'Low Density Deck Fastener', 'Low Density Fastener - Tube Lok', 'Nail Strippers', 'Nails', 'Spikes & Carbide Bits', 'Term Bar'] },
  { cat: 'On Deck Equipment', sub: ['Powered', 'Non Powered'] },
  { cat: 'Paints and Primers', sub: ['Flashing Paint', 'Asphalt Based Primer', 'Spray Paint'] },
  { cat: 'Personal Protection & Safety', sub: ['Gloves', 'Cleaners, Solvents & Water Cool', 'Disposal & Containment', 'First Aid & Burn Kit', 'Fire Extinguihser'] },
  { cat: 'Replacement Engines', sub: ['Kettle Engine Replacement Part', 'Replacement Engine For Sprayer', 'Replacement Kettle Engine'] },
  { cat: 'Roofmaster Kettles', sub: ['Kettles', 'Kettle Accessories', 'Kettle Repairs Parts', 'Tanker Pumps & Accessories'] },
  { cat: 'Single Ply Tools & Equipment', sub: ['Hot Air Welders', 'Generators', 'Adheisve Rollers And Frames', 'Rollers, Steel And Rubber', 'Single Ply Scissors & Testers', 'Modified Bitumen Lp Torches', 'Lpg Tanks & Hoses', 'Material & Hose Clamps'] },
  { cat: 'Spraying Systems', sub: ['Roof Rigs', 'Small Pump Systems', 'Granule Pump Systems', 'Granule Master', 'Pole Guns & Hoses', 'Spray Tips', 'Glass Choppers', 'Pail Warmer', 'Spray Material Valves', 'Swivel Adaptors For Spray Hoses', 'Sprayu Pump Parts', 'Hand Sprayers & Mixers', 'Warmmaster'] },
  { cat: 'Tear Off Tools', sub: ['Tear Off Spade', 'Scoop Shovels', 'Tear Off Bars - Built Up Roof', 'Tear  Off Bars - Shingle', 'Tarps', 'Trash Chutes'] },
  { cat: 'Tires', sub: ['Non-Flat Lite Foam Filled', 'Pneumatic Tires & Wheels'] },
  { cat: 'Truck Accessories', sub: ['Cargo Straps For Truck Tie Down', 'Winch Bar For Truck Tie Down'] },
  { cat: 'Uncategorized', sub: [] },
  { cat: 'Vents & Roof Accessories', sub: ['Vents', 'Commdeck', 'Paver Supports', 'Expansion Joints', 'Pipe Stands & Specs', 'Solar'] }
]

export default function List(props) {

  return (
    <div id="list-group" className={props.class}>
      <Link to="/" id={'list-header'} className="list-group-item list-group-item-action flex-column align-items-start col-12" >
        <div className="d-flex w-100 justify-content-between">
          <h2 className="mb-1 cat-list-title">Roofmaster Products</h2>
        </div>
        {/* <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small> */}
      </Link>
      {categories.map((category, i) => {
        return (
          <div className='category-list'>
          <Link to={'/category=' + category.cat} id={category.cat.split(' ').join('-') + '-list'} className="list-group-item list-group-item-action flex-column align-items-start col-12" key={i}>
            <div className="d-flex w-100 justify-content-between">
              <h2 className="mb-1 cat-list-title">{category.cat}</h2>
            </div>
              </Link>
            <div className='subcat-list'>
              {category.sub.map((sub, i) => {
                return (
                  <div key={i}><Link to={'/category=' + category.cat + '/subcat=' + sub} className='subcat-list-item'>{sub}</Link><br /></div>
                )
              })}
            </div>
            {/* <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small> */}
          </div>
        )
      })}

    </div>
  )
}