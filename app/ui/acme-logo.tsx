import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'

export default function AcmeLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <GlobeAltIcon className='h-12 w-12 md:h-10 md lg:h-12 lg:w-12 rotate-15' />
      <p className='text-4xl md:text-3xl lg:text-4xl ml-2 sm:ml-1'>All In One</p>
    </div>
  )
}
