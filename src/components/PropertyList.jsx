import React, { useEffect, useState } from 'react'
import { propertyDeleteApi, propertyListApi } from '../services/api'
import PropertyDetail from './PropertyDetail'

function PropertyList() {

    let [properties,setProperties]=useState()

    useEffect(()=>{fetchProperties()},[])

    async function fetchProperties(){

        let res=await propertyListApi()

        // console.log(res.data);

        setProperties(res.data)

   
        
    }
    async function handleDelete(id){

        let res=await propertyDeleteApi(id)

        fetchProperties()  //to reload the list after delete

    }
  return (
    <div>

        <div className="container">
            <table className='table border-3 shadow rounded'>
                <tr>
                    <th>Location</th>
                    <th>Address</th>
                    <th>Price</th>
                    <th>Property_type</th>
                    <th>Action</th>
                    
                </tr>
                <tbody>
                    {properties&&properties.map((p,i)=>(
                        <tr>
                            <td>{p.location}</td>
                            <td>{p.address}</td>
                            <td>{p.price}</td>
                            <td>{p.property_type}</td>
                            <td>
                                <button onClick={()=>handleDelete(p.id)}>Delete</button>
                                
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default PropertyList