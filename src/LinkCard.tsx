
import arrow from './assets/arrow-right-solid.svg'

function LinkCard({service, url, icon}) {
  return (
    <a href={url} target="_blank" className='flex items-center justify-between rounded-full mt-6 bg-grey'>
      <div className='flex items-center'>
        <div className='flex items-center justify-center w-16 h-16 rounded-full bg-pink'>
            <img src={icon} className="w-8 h-8" alt={`Follow Emily on ${service}`} />
        </div>
        <p className='ml-4 text-white'>{service}</p>
      </div>
      <img src={arrow} className="w-6 h-6 mr-4" />
    </a>
  )
}

export default LinkCard
