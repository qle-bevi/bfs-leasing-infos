import type { SVGProps } from 'react'
import React from 'react'
import BenefitsList from '../../BenefitsList'

const Meter = (props: SVGProps<SVGSVGElement>): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59.046 59.045"
      {...props}
    >
      <path
        fill="currentColor"
        d="M.925 40.908a3.081 3.081 0 0 0-.03 4.371L13.766 58.15a3.085 3.085 0 0 0 4.373-.027l39.984-39.985a3.08 3.08 0 0 0 .027-4.372L45.282.895a3.085 3.085 0 0 0-4.373.029l-3.961 3.959 6.353 6.353-2.309 2.309-6.354-6.351-5.114 5.114 6.352 6.353-2.31 2.31-6.353-6.352-5.141 5.142 6.351 6.352-2.309 2.31-6.354-6.352-5.114 5.115 6.353 6.353-2.311 2.309-6.352-6.352-5.142 5.144 6.353 6.352-2.285 2.282-6.351-6.352-3.986 3.987Zm47.848-26.676a2.857 2.857 0 0 1 4.042-.026 2.887 2.887 0 0 1 0 4.068 2.857 2.857 0 0 1-4.042-.026 2.826 2.826 0 0 1 0-4.016Z"
      />
    </svg>
)

const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 73.014 59.121"
    {...props}
  >
    <path
      fill="currentColor"
      d="M43.229.001a29.226 29.226 0 0 0-15.483 4.6l5.093 19.8c.752 2.81-.489 4.648-2.24 6.316-1.824 1.731-4.528 1.123-6.193.286-.548-.274-1.192-.584-1.752-.857-1.831 6.914-.5 13.119 3.177 19.068a5.621 5.621 0 0 1 1.386 5.094A29.578 29.578 0 1 0 43.229-.004Zm-21.39 3.056a4.025 4.025 0 0 0-.978.326C15.654 5.601 7.38 9.283.815 12.143a1.324 1.324 0 0 0 0 2.445l6.153 3.014s-.2.626-.286.9c-4.4 13.3.305 27.339 14.627 34.51.654.325 1.492-.235 1.1-.937-5.385-6.928-6.947-17.425-2.771-26.931l.531-1.1c2.133 1.082 4.3 2.108 6.437 3.177a1.27 1.27 0 0 0 1.956-1.425c-.117-.08-3.486-15.129-5.582-21.635-.227-.701-.38-1.205-1.141-1.104ZM43.352 4.89a2.454 2.454 0 0 1 2.445 2.445V9.21a2.445 2.445 0 1 1-4.889 0V7.335a2.452 2.452 0 0 1 2.443-2.444Zm7.7 8.964a1.812 1.812 0 0 1 .529.163 1.2 1.2 0 0 1 .652.774 1.894 1.894 0 0 1-.121 1.3L46.04 29.332 59.078 43.39a.388.388 0 0 1 .039.04.447.447 0 0 1 0 .081 1.285 1.285 0 0 1-.245 1.712 1.249 1.249 0 0 1-1.588-.123h-.079v.082c-2.672-2.254-6.372-4.818-9.819-7.171a69.05 69.05 0 0 1-7.986-5.949 3.206 3.206 0 0 1-.9-2.567 5.036 5.036 0 0 1 1.1-2.688l9.941-12.264a1.8 1.8 0 0 1 .938-.652 1.606 1.606 0 0 1 .57-.042ZM63.846 27.26h1.833a2.445 2.445 0 0 1 0 4.889h-1.833a2.445 2.445 0 0 1 0-4.889ZM43.352 47.753a2.454 2.454 0 0 1 2.445 2.445v1.834a2.445 2.445 0 1 1-4.889 0v-1.834a2.452 2.452 0 0 1 2.443-2.445Z"
    />
  </svg>
)

const Key = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.731 68.44" {...props}>
    <g fill="currentColor" data-name="key">
      <path
        d="M30.319 29.645 0 60.998l.793 7.442 8.731-1.4 2.518-5.936 5.778-1.49 1.584-6.125 5.984-1.787 1.39-5.841 5.7-1.475 3.348-3.462 2.694-.171 1.589-1.639Zm-4.267 8.663L6.825 58.189a.429.429 0 0 1-.6.073l-.511-.493a.432.432 0 0 1 .05-.6l19.224-19.884a.436.436 0 0 1 .607-.073l.511.493a.436.436 0 0 1-.055.603Z"
        data-name="Trac\xE9 39"
      />
      <path
        d="M68.419 21.536 48.455 1.345a4.535 4.535 0 0 0-6.41-.038l-15.465 15.3a4.525 4.525 0 0 0-.035 6.407l19.964 20.189a4.53 4.53 0 0 0 6.41.035l15.468-15.294a4.53 4.53 0 0 0 .032-6.408Zm-11.024 4.317L44.017 12.321a3.323 3.323 0 1 1 4.725-4.673L62.12 21.182a3.322 3.322 0 1 1-4.725 4.67Z"
        data-name="Trac\xE9 40"
      />
    </g>
  </svg>
)

const AdvantagesList = (): JSX.Element => {
  return (
        <BenefitsList>
            <BenefitsList.Item theme='gray' icon={(<Meter className="w-8 sm:w-16 h-auto" />)}>
                <span slot="text">
                    Vos loyers sont calculés &quot;sur-mesure&quot; en fonction de l&apos;apport,
                    la durée et des services associés.
                </span>
            </BenefitsList.Item>
            <BenefitsList.Item theme='primary' icon={(<Clock className="w-8 sm:w-16 h-auto" />)}>
                <span slot="text">
                    Une location avec un <span className="font-bold">kilométrage illimité</span> permettant une grande <span className="font-bold">fléxibilité.</span>
                </span>
            </BenefitsList.Item>
            <BenefitsList.Item theme='light-gray' icon={(<Key className="w-8 sm:w-16 h-auto" />)}>
                <span slot="text">
                  Un montage financier qui vous donne la possibilité, sous 
                  conditions, <span className='font-bold'>de devenir propriétaire de votre véhicule à partir du
                  12ème mois</span> en vous acquittant d'une option d'achat très basse.
                </span>
            </BenefitsList.Item>
        </BenefitsList>
  )
}

export default AdvantagesList
