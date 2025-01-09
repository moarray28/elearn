import React from 'react'

export default function Blob({color}) {
  return (
    <>
     <div className=" h-32 w-32 text-center justify-content m-4 p-11 rounded-full" style={{backgroundColor:color}} >
        {color}
    </div> 
    </>
  )
}
