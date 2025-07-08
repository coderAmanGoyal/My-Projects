import React from 'react'

export default function Category({CL, setCatName}) {

  let cat = CL.map((v, i) => {
    return (
      <li className='p-[10px] pb-[2px] cursor-pointer text-[20px] font-serif font-[500] mb-3' onClick={() => setCatName(v)} key={i}>{v}</li>
    )
  })

  return (
    <div>
      <h3 className='text-[25px] font-[500] p-[10px]'>Product Category</h3>
      <ul className='bg-[#ccc]'>
        {cat}
      </ul>
    </div>
  )
}
