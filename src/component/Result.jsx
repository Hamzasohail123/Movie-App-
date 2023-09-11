import React from 'react'

 const Result = (props) => {

    const boxes = props.movies.map(
        (item,ind) =>{
            return <Box key={ind}
             image={item.poster_path}
            title={item.original_title}
            rating={item.vote_average}/>
        }
    )

  return (
    <div className='w-full grid md:grid-cols-4 gap-5 mt-3 '>
        {boxes}  

    </div>
  )
}
export default Result



const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className='shadow min-h-[200px]  mt-3 pb-3'>
        <img src={IMGPATH + props.image} className='w-full' alt="" />
        <div className='flex justify-between px-2'> <span className='text-2xl'>{props.title} </span>
            <span className='text-xl text-yellow-400 font-bold  '>{props.rating}</span>
        </div>
    </div>
  )
}

