import React from 'react'

const Button = ({text}) => {
  return (
<button className="hover:border hover:font-bold cursor-pointer uppercase px-[15px] py-[6px] transition-all duration-300 ease-in-out">
  {text}
</button>
)
}

export default Button