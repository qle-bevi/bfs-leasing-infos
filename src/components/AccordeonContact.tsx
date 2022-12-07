import React, { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import clsx from 'clsx'
import { PhoneContactButton, EmailContactButton, PostalContactButton, AppContactButton } from './PhoneContactButton'

const VARIANTS: Record<string, Variants> = {
  container: {
    open: {
      height: 'auto',
      opacity: 1,
      translateY: 0,
      transition: {
        when: 'beforeChildren'
      }
    },
    close: {
      height: 0,
      opacity: 0,
      transition: {
        when: 'afterChildren'
      }
    }
  },
  iconsContainer: {
    open: {
      transition: {
        staggerChildren: 0.05
      }
    },
    close: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  },
  icons: {
    open: {
      opacity: 1,
      scale: 1
    },
    close: {
      opacity: 0,
      scale: 0.6
    }
  },
  text: {
    open: {
      opacity: 1,
      translateX: 0
    },
    close: {
      opacity: 0,
      translateX: 50
    }
  },
  chevron: {
    open: {
      rotate: -180,
      transition: {
        duration: 0.6
      }
    },
    close: {
      rotate: 0,
      transition: {
        duration: 0.6
      }
    }
  }
}

export type ContactInfo = {
  email?: boolean
  mail?: boolean
  phone?: boolean
  web?: boolean
}

export type AccordeonContactProps = {
  contactInfos: ContactInfo
  title: string
  text: string
}

const AccordeonContact = ({
  contactInfos,
  title,
  text
}: AccordeonContactProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    email = false,
    mail = false,
    phone = false,
    web = false
  } = contactInfos

  return (
    <div className="z-10 overflow-visible">
      <div className="relative mb-4 overflow-visible">
        <a href="#" className="overflow-visible" onClick={
          (ev) => {
            ev.preventDefault()
            setIsOpen(!isOpen)
          }}
        >
            <div className={clsx(
              'relative pr-20 pb-8 sm:pb-4 sm:pr-4 px-4 lg:px-8 py-4 text-lg overflow-visible',
              { 'bg-bmw-blue text-white': isOpen },
              { 'bg-bmw-light-gray': !isOpen }
            )}>
              { title }
              <motion.div variants={VARIANTS.chevron} initial="close" animate={isOpen ? 'open' : 'close'} className="absolute sm:top-4 right-4 sm:right-12 bottom-4 flex justify-center items-end sm:items-center">
                <svg
                  viewBox="0 0 49.468 28.879"
                  className='w-8 h-auto'
                >
                  <path
                    fill="currentColor"
                    d="m24.735 28.879 2.476-2.365L49.468 5.147 44.516 0 24.734 19 4.952 0 0 5.147l22.257 21.367Z"
                    data-name="Trac\xE9 48"
                  />
                </svg>
              </motion.div>
            </div>
          </a>
          <AnimatePresence exitBeforeEnter>
            { isOpen && (
              <motion.div
                className="overflow-visible z-50"
                variants={VARIANTS.container}
                initial="close"
                animate={isOpen ? 'open' : 'close'}
                exit="close"
              >
                <div className="py-4 bg-white flex flex-col space-y-4 m:space-y-0 sm:flex-row items-end overflow-visible">
                  <motion.div variants={VARIANTS.iconsContainer} className="w-full sm:w-auto px-4 justify-between lg:px-8 flex flex-row items-end sm:space-x-6 overflow-visible">
                    <div className='w-6 h-auto overflow-visible'>
                      { phone && <PhoneContactButton /> }
                    </div>
                    <div className='w-6 h-auto'>
                      { email && <EmailContactButton />}
                    </div>
                    <div className='w-8 h-auto'>
                      { mail && <PostalContactButton /> }
                    </div>
                    <div className='w-8 h-auto'>
                      { web &&  <AppContactButton />}
                    </div>
                  </motion.div>
                  <motion.div variants={VARIANTS.text} className="w-full sm:w-auto px-4 sm:px-0 pr-4 lg:pr-8 flex-1">
                    { text }
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </div>
    
  )
}

export default AccordeonContact
