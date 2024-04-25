import { TbTrekking } from 'react-icons/tb'
import { ImRocket } from 'react-icons/im'
import { Link } from 'react-router-dom'
const TourCard = (props) => {
  console.log(props.tour)
  return (
    <div className='flex flex-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 h-auto px-4 py-6 bg-white shadow-md rounded-md m-2'>
      <img
        className='h-52 w-full object-cover rounded-md mb-4'
        src={props?.tour?.images[0]}
        alt={props?.tour?.name}
        loading="lazy"
      />
      <h1 className='text-lg font-bold'>{props?.tour?.name}</h1>

      <div className='flex items-center justify-between mb-2'>
        <span className='flex font-semibold'>
          {' '}
          <TbTrekking className='text-xl font-bold' /> 5+ activities{' '}
        </span>
        <span className='flex font-semibold'>
          {' '}
          <ImRocket className='text-xl font-bold' /> 3 flights{' '}
        </span>

        <span className='font-semibold text-sm'>3D - 2N</span>
      </div>
      <p className='text-gray-800 text-sm mb-4'>{props?.tour?.description}</p>
      <Link to={`know-more/${props?.tour?._id}`}>
        <button className='bg-black text-white font-semibold px-4 py-2 rounded-md w-full hover:bg-white hover:text-black border border-black transition duration-300'>
          Know more
        </button>
      </Link>
    </div>
  )
}

export default TourCard
