import React from 'react'
import projectImg from '../assets/project-bg.png'

const ProjectCard = ({ days, title, desc, social, coin, refund, img }) => {
  return (
    <div className='bg-title rounded-md overflow-hidden'>
      <div
        className='top w-full h-22 relative'
        style={{ background: `url(${projectImg})`, backgroundSize: 'cover' }}
      >
        <img
          className='h-12 w-12 absolute -bottom-3 border-2 border-white rounded-full left-2'
          src={img}
          alt=''
        />
      </div>
      <div className='p-3'>
        <h3 className='font-bold pb-1'>{title}</h3>
        <p>{desc}</p>
        <a href={'#'} className='mt-y text-primary-btn'>
          {social}
        </a>

        <div className='h-1 w-full bg-black my-4'>
          <div className='h-full bg-white w-1/2'></div>
        </div>
        <p className='text-primary-btn'>{coin}</p>
        <p>{refund}</p>
        <p>{days}</p>
        <div className='text-center my-5'>
          <a className='project-btn bg-black text-white px-4 rounded-md py-2' href='#'>
            View Presale
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
