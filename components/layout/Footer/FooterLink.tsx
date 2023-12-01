import Link from 'next/link'

import type { FooterLinkProps } from './types'

const FooterLink = ({ label, url }: FooterLinkProps) => {
  return (
    <Link
      target='_blank'
      rel='noopener'
      className='transition-all cursor-pointer no-underline outline-none outline-offset-2 text-inherit hover:underline font-heading font-semibold'
      href={url}
      aria-label={label}
    >
      {label}
    </Link>
  )
}

export default FooterLink
