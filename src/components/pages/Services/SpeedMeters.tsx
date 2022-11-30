import React, { SVGProps } from 'react'
import { motion } from 'framer-motion'

const Counter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 325.412 162.696"
    {...props}
  >
    <g data-name="Groupe 33">
      <g data-name="Groupe 32">
        <path
          fill="#caf0f8"
          d="m20.802 83.037 36.244 20.924a120.277 120.277 0 0 0-15.209 58.735H0a161.953 161.953 0 0 1 20.802-79.659Z"
          data-name="Trac\xE9 49"
        />
        <path
          fill="#ade8f4"
          d="m79.811 22.664 20.924 36.243a121.438 121.438 0 0 0-42.181 42.424L22.316 80.407a163.457 163.457 0 0 1 57.495-57.743Z"
          data-name="Trac\xE9 50"
        />
        <path
          fill="#90e0ef"
          d="M82.437 21.136A161.891 161.891 0 0 1 161.19 0v41.837a120.248 120.248 0 0 0-57.83 15.542Z"
          data-name="Trac\xE9 51"
        />
        <path
          fill="#48cae4"
          d="m242.981 21.141-20.924 36.238a120.266 120.266 0 0 0-57.835-15.542V0a161.858 161.858 0 0 1 78.759 21.141Z"
          data-name="Trac\xE9 52"
        />
        <path
          fill="#00b4d8"
          d="m303.097 80.408-36.238 20.914a121.462 121.462 0 0 0-42.181-42.419l20.924-36.243a163.454 163.454 0 0 1 57.495 57.748Z"
          data-name="Trac\xE9 53"
        />
        <path
          fill="#0096c7"
          d="M325.412 162.696h-41.837a120.28 120.28 0 0 0-15.208-58.735l36.243-20.924a161.953 161.953 0 0 1 20.802 79.659Z"
          data-name="Trac\xE9 54"
        />
      </g>
    </g>
  </svg>
)

const Needle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 180.774 56.893"
    {...props}
  >
    <g data-name="Groupe 31">
      <path
        fill="#383838"
        d="M180.755.001h.019-.01.009-.018L0 38.814l2.406 8.98 2.406 8.98Z"
        data-name="Trac\xE9 55"
      />
      <path
        fill="#1d1d1b"
        d="M2.406 47.794 180.773 0 4.812 56.773Z"
        data-name="Trac\xE9 56"
      />
      <circle
        cx={17.045}
        cy={17.045}
        r={17.045}
        fill="#1d1d1b"
        data-name="Ellipse 28"
        transform="rotate(-81.172 40.959 13.216)"
      />
      <circle
        cx={9.168}
        cy={9.168}
        r={9.168}
        fill="#fff"
        data-name="Ellipse 29"
        transform="rotate(-86.39 40.169 6.31)"
      />
    </g>
  </svg>
)

const SpeedMeters = () => {
  return (
    <div className="flex-1 w-full border border-bmw-gray flex flex-col space-y-8 px-14 py-8 justify-center items-center mt-4 text-center">
      <span>Le montant de la couverture atteint jusqu'à <span className="font-bold">120 000€</span></span>
      <div className="relative">
        <Counter className="w-64 h-auto" />
        <motion.div initial={{ rotate: -180 }} animate={{ rotate: 0, transition: { duration: 2, ease: 'easeInOut' } }} className="absolute bottom-[-12%] left-[39.5%] transform-gpu" style={{ transformOrigin: '22.8% 66.2%' }}>
          <Needle className=" w-32 h-auto" />
        </motion.div>
      </div>
    </div>
  )
}

export default SpeedMeters
