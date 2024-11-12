import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { propertyDetailApi } from '../services/api'

function PropertyDetail() {
    let {id}=useParams()  // useParamas is hook used to get id 
    
    async function fetchPropertyDetail(){

        console.log(id);
        
        let res=await propertyDetailApi(id)

        console.log(res.data);
        
    }

    useEffect(()=>fetchPropertyDetail(),[id])
  return (
    <div>
      
    </div>
  )
}

export default PropertyDetail