import React from 'react'
import FeatureContainer from './FeatureContainer'
import Point from './Point'

const Featured = () => {
  return (
    <>
    <FeatureContainer />
    <div className='flex w-[30%] m-auto'>
    <Point num="1" />
    <Point num="2" />
    <Point num="3" />
    <Point num="4" />
    <Point num="5" />
    </div>
    </>
  )
}

export default Featured