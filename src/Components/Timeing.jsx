import React from 'react'

export default function Timeing() {
    let now=new Date();
    let currentTime=` ${now}`

  return (
    <div>
       <p><strong>The current time in india is {currentTime}</strong> </p>
    </div>
  )
}
