import arrow from './assets/arrow-right-solid.svg'

interface linkCardProps {
    service: String;
    url: String;
    icon: unknown;
}

function LinkCard(props:linkCardProps) {
  return (
    <a href={props.url} target="_blank" className='flex items-center justify-between rounded-full mt-6 bg-grey'>
      <div className='flex items-center'>
        <div className='flex items-center justify-center w-16 h-16 rounded-full bg-pink'>
            <img src={props.icon} className="w-8 h-8" alt={`Follow Emily on ${props.service}`} />
        </div>
        <p className='ml-4 text-white'>{props.service}</p>
      </div>
      <img src={arrow} className="w-6 h-6 mr-4" />
    </a>
  )
}

export default LinkCard
