import React, { useState } from 'react'
import { AnimatePresence, Variants, motion } from 'framer-motion'
import clsx from 'clsx'

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
    <div className="mb-4">
      <a href="#" onClick={
        (ev) => {
          ev.preventDefault()
          setIsOpen(!isOpen)
        }}
      >
        <div className={clsx(
          'relative px-4 lg:px-8 py-4  text-lg',
          { 'bg-bmw-blue text-white': isOpen },
          { 'bg-bmw-light-gray': !isOpen }
        )}>
          { title }
          <motion.div variants={VARIANTS.chevron} initial="close" animate={isOpen ? 'open' : 'close'} className="absolute top-0 right-12 bottom-0 flex justify-center items-center">
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
        <AnimatePresence exitBeforeEnter>
          { isOpen && (
            <motion.div
              className="overflow-hidden"
              variants={VARIANTS.container}
              initial="close"
              animate={isOpen ? 'open' : 'close'}
              exit="close"
            >
              <div className="py-4 bg-white flex flex-row items-end">
                <motion.div variants={VARIANTS.iconsContainer} className="px-4 lg:px-8 flex flex-row items-end space-x-6">
                  <div className='w-6 h-auto'>
                    { phone && <motion.svg variants={VARIANTS.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.001 25" className='w-6 h-auto' opacity={phone ? '1' : '0'}>
                      <path id="Tracé_99" data-name="Tracé 99" d="M65.12,56.994a1.928,1.928,0,0,0-1.275.513,28.809,28.809,0,0,0-2.461,2.3,4.488,4.488,0,0,0-1.009,3.949c.784,4.125,3.894,8.23,6.887,11.225.006.006.011-.007.018,0s-.007.011,0,.018c2.993,3,7.084,6.119,11.208,6.906a4.558,4.558,0,0,0,3.984-.992,29.718,29.718,0,0,0,2.319-2.532,1.618,1.618,0,0,0-.071-2.408,37.1,37.1,0,0,0-4.763-3.364,1.457,1.457,0,0,0-2.213.443,14.862,14.862,0,0,0-1.257,2.426c-.222.609-.66.734-1.328.407a24.7,24.7,0,0,1-4.9-3.825l-.018-.018c-.006-.006-.029.007-.036,0A24.73,24.73,0,0,1,66.4,67.121c-.327-.669-.219-1.123.389-1.346a15.143,15.143,0,0,0,2.444-1.257,1.435,1.435,0,0,0,.425-2.2,37.556,37.556,0,0,0-3.4-4.745A1.959,1.959,0,0,0,65.12,56.994Z" transform="translate(-60.29 -56.994)" fill="#333"/>
                    </motion.svg> }
                  </div>
                  <div className='w-6 h-auto'>
                    { email && <motion.svg variants={VARIANTS.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" className='w-6 h-auto' opacity={email ? '1' : '0'}>
                      <path id="path11267" d="M1413.5,825a14.5,14.5,0,1,0,14.5,14.5A14.517,14.517,0,0,0,1413.5,825Zm.514,4.833a10.013,10.013,0,0,1,3.443.635,8.743,8.743,0,0,1,5.65,7.129c.319,2.289-.465,4.963-2.6,6.132a4.492,4.492,0,0,1-5.014-.453,4.2,4.2,0,0,1-4.593.755c-2.727-1.3-3.225-5.122-1.661-7.582a4.463,4.463,0,0,1,6.133-1.39c.1-.095.484-.635,1.028-.453a1.137,1.137,0,0,1,1.419,1.148c-.133,1.4-.146,2.8-.242,4.2-.038.563-.353,1.641.453,1.782a2.51,2.51,0,0,0,2.779-2.507,6.575,6.575,0,0,0-3.444-6.435,8.467,8.467,0,0,0-8.58.967,7.682,7.682,0,0,0-1.177,10.361,7.6,7.6,0,0,0,9.636,1.722l1.179,1.813a7.715,7.715,0,0,1-1.9,1.057,9.589,9.589,0,0,1-11.117-3.655,9.878,9.878,0,0,1-.635-9.546,10.223,10.223,0,0,1,9.244-5.679Zm-.816,6.526a1.881,1.881,0,0,0-.573.059c-1.865.485-2.49,2.676-1.934,4.38a2.426,2.426,0,0,0,3.081,1.51c1.5-.443,1.936-2.052,1.723-3.564a3.042,3.042,0,0,0-.817-1.752,2.283,2.283,0,0,0-1.479-.634Z" transform="translate(-1399 -825)" fill="#333"/>
                    </motion.svg>}
                  </div>
                  <div className='w-8 h-auto'>
                    { mail && <motion.svg variants={VARIANTS.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.57 19.25" className='w-8 h-auto' opacity={mail ? '1' : '0'}>
                      <path id="path8094" d="M246.326,67,257.9,77.7a5.88,5.88,0,0,0,1.013.791,1.985,1.985,0,0,0,.966.285,2.042,2.042,0,0,0,.982-.285,5.819,5.819,0,0,0,1-.791L273.428,67h-27.1Zm-1.234,1.029V85.157l9.736-8.168-9.736-8.96Zm29.57,0-9.72,8.96,9.72,8.168ZM255.983,78.1l-9.7,8.153h27.2L263.787,78.1l-.9.807a6.69,6.69,0,0,1-1.266.965,3.334,3.334,0,0,1-3.483,0,6.673,6.673,0,0,1-1.266-.965Z" transform="translate(-245.092 -67)" fill="#333"/>
                    </motion.svg> }
                  </div>
                  <div className='w-8 h-auto'>
                    { web && <motion.svg variants={VARIANTS.icons} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.165 36.266" className='w-8 h-auto' opacity={web ? '1' : '0'}>
                      <g id="Groupe_43" data-name="Groupe 43" transform="translate(-1044.835 -1528.999)">
                        <text id="_" data-name="*" transform="translate(1073 1552)" font-size="21" font-family="SegoeUI-Light, Segoe UI" font-weight="300"><tspan x="0" y="0">*</tspan></text>
                        <path id="rect10501" d="M1407.428,153a2.446,2.446,0,0,0-2.451,2.452v25.1a2.446,2.446,0,0,0,2.451,2.451h17.627a2.446,2.446,0,0,0,2.451-2.451v-25.1a2.447,2.447,0,0,0-2.451-2.452Zm2.569,3.735h12.49a1.239,1.239,0,0,1,1.285,1.2v16.284a1.238,1.238,0,0,1-1.285,1.2H1410a1.238,1.238,0,0,1-1.285-1.2V157.932A1.239,1.239,0,0,1,1410,156.735Zm4.552,20.6h3.649v1.78h-3.649Z" transform="translate(1227.835 137.759) rotate(90)" fill="#333"/>
                      </g>
                    </motion.svg> }
                  </div>
                </motion.div>
                <motion.div variants={VARIANTS.text} className="pr-4 lg:pr-8 flex-1">
                  { text }
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  )
}

export default AccordeonContact
