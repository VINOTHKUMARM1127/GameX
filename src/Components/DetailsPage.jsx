import React from 'react'
import { useParams } from 'react-router-dom'
import FetchData from '../FetchData/FetchData';

const DetailsPage = () => {
  const {id} = useParams();
  const { data, loading } = FetchData({ url: `/games/${id}`, id: null })
  console.log('Details',data)
  if (loading) {
    return (<div>Loading...</div>)
}

  return (
    <div>
      <img className='w-[90%] mx-auto my-4 ' src={data.background_image} alt={data.name} />
      <div>{data.name}</div>
    </div>
  )
}

export default DetailsPage
