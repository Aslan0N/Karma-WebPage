// import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import LatestCard from './LatestCard'
import ShoesData from '../../../Data/ShoesData.json'


const LatestProduct = () => {
    const [latest, setLatest] = useState(ShoesData)


    // axios.get('http://127.0.0.1:5500/src/Data/ShoesData.json')
    // .then(res=> setLatest(res.data))

  return (
    <>
      <div id="latest">
        <div className="container">
            <h2>Latest Products</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nesciunt molestias officiis?</p>
        </div>
        <div className="container">
            <div className="row g-5">
                {
                    latest.map((item,index)=>{
                        return (
                            <LatestCard latest={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default LatestProduct