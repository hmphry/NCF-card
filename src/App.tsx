import { useState } from 'react'
import LinkCard from './LinkCard'
import twitter from './assets/twitter.svg'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'

function App() {

  return (
    <div className="bg-black min-h-full font-sans">
      <div className='bg-gradient-to-r from-blue to-pink h-2 mb-16'></div>
      <section className='px-4'>
        <h1 className='text-white text-2xl font-semibold'>Emily Humphrey</h1>
        <p className='text-white text-sm'>Front End Engineer</p>
      </section>
      <section className='px-4 mt-4'>
        <a href="data/emilyhumphrey.vcf" download className='flex w-full h-16 rounded-full justify-center items-center bg-gradient-to-r from-blue to-pink text-white font-semibold text-center'>Save Contact</a>
        <LinkCard service="Twitter" url="https://www.twitter.com/heyhmphry/" icon={twitter} />
        <LinkCard service="Instagram" url="https://www.instagram.com/heyhmphry/" icon={instagram} />
        <LinkCard service="Facebook" url="https://www.facebook.com/heyhmphry/" icon={facebook} />
        <LinkCard service="LinkedIn" url="https://www.linkedin.com/in/heyhmphry/" icon={linkedin} />
      </section>
    </div>
  )
}

export default App
