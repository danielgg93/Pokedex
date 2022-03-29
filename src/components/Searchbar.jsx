import React, { useState } from 'react'

export const Searchbar = () => {
   
    const [search, setsearch] = useState("")
    
    const onChange = (e) =>{
        console.log(e.target.value)
        setsearch(e.target.value);
    }
  return (
    <div>
        <div>
            <input placeholder='Buscar pokemon...'
            onChange={onChange}/>
        </div>
        <div>
            {search}
        </div>
    </div>
  )
}
