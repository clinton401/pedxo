import { nanoid } from 'nanoid'
import CompanyLogo1 from './assets/svg/CompanyLogo1.svg'
import CompanyLogo2 from './assets/svg/CompanyLogo2.svg'
import CompanyLogo3 from './assets/svg/CompanyLogo3.svg'
import CompanyLogo4 from './assets/svg/CompanyLogo4.svg'
import CompanyLogo5 from './assets/svg/CompanyLogo5.svg'
import CompanyLogo6 from './assets/svg/CompanyLogo6.svg'
import CompanyLogo7 from './assets/svg/CompanyLogo7.svg'
import checked from './assets/svg/checked.svg'
import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'

export const templateBenefits = [
  { id: nanoid(), text: 'NDA', icon: checked },
  { id: nanoid(), text: 'Contract Agreement', icon: checked },
  { id: nanoid(), text: 'Compliance', icon: checked },
]

export const svgIcons = [
  {
    id: nanoid(),
    svg: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='white'
        xmlns='http://www.w3.org/2000/svg'
        id='navbar-vector'
      >
        <path
          id='Vector'
          d='M18.3077 9.30769H12.7692C12.5856 9.30769 12.4095 9.38063 12.2797 9.51046C12.1499 9.6403 12.0769 9.81639 12.0769 10V18.3077C12.0769 18.4913 12.1499 18.6674 12.2797 18.7972C12.4095 18.9271 12.5856 19 12.7692 19H18.3077C18.4913 19 18.6674 18.9271 18.7972 18.7972C18.9271 18.6674 19 18.4913 19 18.3077V10C19 9.81639 18.9271 9.6403 18.7972 9.51046C18.6674 9.38063 18.4913 9.30769 18.3077 9.30769ZM18.3077 1H12.7692C12.5856 1 12.4095 1.07294 12.2797 1.20277C12.1499 1.33261 12.0769 1.5087 12.0769 1.69231V4.47538C12.0769 4.659 12.1499 4.83509 12.2797 4.96492C12.4095 5.09475 12.5856 5.16769 12.7692 5.16769H18.3077C18.4913 5.16769 18.6674 5.09475 18.7972 4.96492C18.9271 4.83509 19 4.659 19 4.47538V1.69231C19 1.5087 18.9271 1.33261 18.7972 1.20277C18.6674 1.07294 18.4913 1 18.3077 1ZM7.23077 1H1.69231C1.5087 1 1.33261 1.07294 1.20277 1.20277C1.07294 1.33261 1 1.5087 1 1.69231V10C1 10.1836 1.07294 10.3597 1.20277 10.4895C1.33261 10.6194 1.5087 10.6923 1.69231 10.6923H7.23077C7.41438 10.6923 7.59047 10.6194 7.7203 10.4895C7.85014 10.3597 7.92308 10.1836 7.92308 10V1.69231C7.92308 1.5087 7.85014 1.33261 7.7203 1.20277C7.59047 1.07294 7.41438 1 7.23077 1ZM7.23077 14.8323H1.69231C1.5087 14.8323 1.33261 14.9052 1.20277 15.0351C1.07294 15.1649 1 15.341 1 15.5246V18.3077C1 18.4913 1.07294 18.6674 1.20277 18.7972C1.33261 18.9271 1.5087 19 1.69231 19H7.23077C7.41438 19 7.59047 18.9271 7.7203 18.7972C7.85014 18.6674 7.92308 18.4913 7.92308 18.3077V15.5246C7.92308 15.341 7.85014 15.1649 7.7203 15.0351C7.59047 14.9052 7.41438 14.8323 7.23077 14.8323Z'
          stroke='black'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    ),
  },
]

export const companies = [
  { id: 1, logo: CompanyLogo1, alt: 'Company 1' },
  { id: 2, logo: CompanyLogo2, alt: 'Company 2' },
  { id: 3, logo: CompanyLogo3, alt: 'Company 3' },
  { id: 4, logo: CompanyLogo4, alt: 'Company 4' },
  { id: 5, logo: CompanyLogo5, alt: 'Company 5' },
  { id: 6, logo: CompanyLogo6, alt: 'Company 6' },
  { id: 7, logo: CompanyLogo7, alt: 'Company 7' },
]

export const socialLinks = [
  {
    icon: (
      <RiInstagramFill className='text-[#6969691F] h-12 w-12 object-contain transition-opacity hover:opacity-80 md:h-24 md:w-24 relative z-10' />
    ),
    url: 'https://www.instagram.com/usepedxo?igsh=MTBtdmoxaHVwZGU5ZQ==',
  },
  {
    icon: (
      <FaTwitter className='text-[#6969691F] h-12 w-12 object-contain transition-opacity hover:opacity-80 md:h-24 md:w-24 relative z-10' />
    ),
    url: 'https://x.com/getpedxo?s=09',
  },
  {
    icon: (
      <FaGithub className='text-[#6969691F] h-12 w-12 object-contain transition-opacity hover:opacity-80 md:h-24 md:w-24 relative z-10' />
    ),
    url: 'https://github.com/Pedxo',
  },
  {
    icon: (
      <SiGmail className='text-[#6969691F] h-12 w-12 object-contain transition-opacity hover:opacity-80 md:h-24 md:w-24 relative z-10' />
    ),
    url: 'mailto:support@pedxo.com',
  },
  {
    icon: (
      <FaYoutube className='text-[#6969691F] h-12 w-12 object-contain transition-opacity hover:opacity-80 md:h-24 md:w-24 relative z-10' />
    ),
    url: 'https://youtube.com/@pedxoinc?si=7tSMtH_Tu7OlzQBC',
  },
]
