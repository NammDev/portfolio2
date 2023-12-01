import Link from 'next/link'
import React from 'react'
import type { IconType } from 'react-icons'
import { FaStickyNote, FaFeatherAlt, FaHome, FaRocket, FaUser } from 'react-icons/fa'

// import { EVENT_TYPE_NAVIGATE } from '~/lib/constants/tracking'
// import { trackEvent } from '~/lib/utils/trackEvent'

type NavItemProps = {
  href: string
  label: string
  icon: IconType
}

const NavItem = ({ href, label, icon }: NavItemProps) => {
  //   const handleClickNavigation = React.useCallback(() => {
  //     trackEvent({
  //       eventName: `Nav Link: ${label}`,
  //       eventData: { type: EVENT_TYPE_NAVIGATE },
  //     })
  //   }, [label])

  return (
    <Link
      href={href}
      aria-label={label}
      className='iconButton bg-transparent text-[unset] text-xl md:text-base p-0'
      // onClick={handleClickNavigation}
    >
      {icon({ style: { cursor: 'pointer' } })}
    </Link>
  )
}

const navigations: NavItemProps[] = [
  {
    href: '/',
    label: 'Home',
    icon: FaHome,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: FaRocket,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: FaFeatherAlt,
  },
  {
    href: '/notes',
    label: 'Note',
    icon: FaStickyNote,
  },
  {
    href: '/about',
    label: 'About',
    icon: FaUser,
  },
]

const Navigation = () => {
  return (
    <>
      {navigations.map((navigation) => (
        <NavItem {...navigation} key={navigation.label} />
      ))}
    </>
  )
}

export default Navigation
