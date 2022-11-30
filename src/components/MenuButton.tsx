import clsx from 'clsx'
import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { SVGProps, useState } from 'react'
import type { ContractInfo } from '../typings'

const VARIANTS: Record<string, Variants> = {
  container: {
    open: {
      translateY: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.3,
        when: 'beforeChildren'
      }
    },
    close: {
      translateY: '-100%',
      transition: {
        ease: 'easeIn',
        when: 'afterChildren'
      }
    }
  },
  closeButton: {
    open: {
      scale: 1,
      opacity: 1
    },
    close: {
      scale: 0.8,
      opacity: 0
    }
  },
  linksContainer: {
    open: {
      transition: {
        staggerChildren: 0.06
      }
    },
    close: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    }
  },
  link: {
    open: {
      opacity: 1,
      translateX: 0
    },
    close: {
      opacity: 0,
      transitionEnd: {
        translateX: '10%'
      }
    }
  }
}

const createLinks = (contract: ContractInfo): LinkProps[] => [
  { text: 'Accueil', href: '/' },
  { text: `Sommaire ${contract.name}`, href: `/contrat/${contract.path}` },
  { text: 'Avantages', href: `/contrat/${contract.path}/vos-avantages` },
  { text: 'Services', href: `/contrat/${contract.path}/vos-services` },
  { text: 'Garanties', href: `/contrat/${contract.path}/vos-garanties` },
  { text: 'Options', href: `/contrat/${contract.path}/vos-options` },
  { text: 'Contacts/Démarches', href: `/contrat/${contract.path}/vos-contacts-et-demarches` },
  { text: 'Rachat de véhicule', href: `/contrat/${contract.path}/rachat-de-votre-vehicule-en-cours-de-contrat` },
  { text: 'Fin de contrat', href: `/contrat/${contract.path}/la-fin-de-votre-contrat` },
  { text: 'Sinistre', href: `/contrat/${contract.path}/en-cas-de-sinistre` }
]

const Burger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33.921 33.167"
    {...props}
  >
    <g fill="currentColor">
      <path
        d="M23.857 10.365h-13.8a1.204 1.204 0 0 0 0 2.409h13.8a1.204 1.204 0 0 0 0-2.409Z"
        data-name="Trac\xE9 3"
      />
      <path
        d="M23.857 15.379h-13.8a1.204 1.204 0 0 0 0 2.409h13.8a1.204 1.204 0 1 0 0-2.409Z"
        data-name="Trac\xE9 4"
      />
      <path
        d="M23.857 20.393h-13.8a1.204 1.204 0 1 0 0 2.409h13.8a1.187 1.187 0 0 0 1.2-1.2 1.212 1.212 0 0 0-1.2-1.209Z"
        data-name="Trac\xE9 5"
      />
      <path
        d="M16.96 0a16.588 16.588 0 1 0 16.96 16.583A16.786 16.786 0 0 0 16.96 0Zm0 30.905a14.326 14.326 0 1 1 14.658-14.322A14.485 14.485 0 0 1 16.96 30.905Z"
        data-name="Trac\xE9 6"
      />
    </g>
  </svg>
)

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z"
      clipRule="evenodd"
    />
  </svg>
)

type LinkProps = {
  href: string
  isActive?: boolean
  text: string
}

const Link = ({
  href,
  isActive = false,
  text
}: LinkProps) => {
  return (
    <motion.a
      variants={VARIANTS.link}
      href={href}
      className={
        clsx(
          'py-4 px-6 border-b border-bmw-light-gray hover:border-bmw-blue hover:text-bmw-blue transition-colors',
          { 'text-bmw-blue border-bmw-blue': isActive }
        )
      }
    >
      { text }
    </motion.a>
  )
}

type MenuButtonProps = {
  contract: ContractInfo
  currentUrl: string
}

const MenuButton = ({ contract, currentUrl }: MenuButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const links = createLinks(contract)

  return (
    <div className="relative z-50">
      <a
        href="#"
        onClick={(ev) => {
          ev.preventDefault()
          setIsOpen(true)
        }}
        className="flex flex-row items-center sm:space-x-2 sm:px-4 sm:py-2 sm:rounded-md text-white hover:text-bmw-blue bg-transparent hover:bg-white hover:drop-shadow-md">
        <span className="hidden sm:inline-block">Menu</span>
        <Burger className="w-14 sm:w-6 h-auto" />
      </a>
      <motion.div
        variants={VARIANTS.container}
        initial="close"
        animate={isOpen ? 'open' : 'close'}
        className={
          clsx(
            'fixed inset-0 z-50 bg-white overflow-hidden',
            { 'pointer-events-none': !isOpen }
          )
        }>
        <div className='relative w-full h-full'>
          <motion.nav
            variants={VARIANTS.linksContainer}
            className="relative overflow-x-hidden w-full h-full flex flex-col px-12 py-12 justify-center text-black font-bold text-xl overflow-y-auto z-20"
          >
            { links.map(l => (
              <Link key={l.href} {...l} isActive={l.href === currentUrl} />
            ))}
          </motion.nav>
          <motion.a
            href="#"
            variants={VARIANTS.closeButton}
            className='absolute right-6 top-6 z-30'
            onClick={(ev) => {
              ev.preventDefault()
              setIsOpen(false)
            }}
          >
            <Close className="w-12 h-auto " />
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

export default MenuButton
