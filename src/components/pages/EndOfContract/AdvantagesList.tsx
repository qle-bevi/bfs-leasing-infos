import type { SVGProps } from 'react'
import React from 'react'
import BenefitsList from '../../BenefitsList'

const Folder = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.157 44.75" {...props}>
    <path
      fill="currentColor"
      d="M4.532 0A4.332 4.332 0 0 0 .001 4.531v34.375a2.942 2.942 0 0 0 3.031 3.219 2.994 2.994 0 0 0 3.031-3.219V14.875a4.514 4.514 0 0 1 4.625-4.531H49.97v-1.5a5.041 5.041 0 0 0-4.563-4.782H25.72C22.882 3.778 19.843 0 16.626 0Zm9.469 14.281a3.961 3.961 0 0 0-3.844 3.5v21.156c0 4.355-4.344 5.813-4.344 5.813h45a4.632 4.632 0 0 0 4.344-4.344V18.625a4.191 4.191 0 0 0-4.25-4.344Z"
    />
  </svg>
)

const Enveloppe = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.375 38" {...props}>
    <path
      fill="currentColor"
      d="m2.437 0 22.844 21.125a11.607 11.607 0 0 0 2 1.562 3.918 3.918 0 0 0 1.906.563 4.031 4.031 0 0 0 1.938-.563 11.489 11.489 0 0 0 1.969-1.562L55.938 0h-53.5ZM0 2.031v33.813l19.219-16.125L0 2.031Zm58.375 0L39.187 19.719l19.188 16.125ZM21.5 21.906 2.344 38h53.688L36.908 21.906 35.125 23.5a13.206 13.206 0 0 1-2.5 1.906 6.582 6.582 0 0 1-6.875 0 13.172 13.172 0 0 1-2.5-1.906Z"
    />
  </svg>
)

const Clipboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 53.375 56.973"
    {...props}
  >
    <path
      fill="currentColor"
      d="M21.994 0a7.59 7.59 0 0 0-7.342 5.49h-.671a3.011 3.011 0 0 0-3 3v4.34a1.8 1.8 0 0 0 1.854 1.854h18.359a1.772 1.772 0 0 0 1.819-1.854V8.49a2.982 2.982 0 0 0-2.967-3h-.7A7.6 7.6 0 0 0 22.002 0Zm0 3.671a3.673 3.673 0 1 1-3.67 3.673 3.664 3.664 0 0 1 3.67-3.673Zm-18.4 3.673a3.681 3.681 0 0 0-3.6 3.635V51.52a3.616 3.616 0 0 0 3.6 3.561h24.674a16.5 16.5 0 0 1-2.857-5.488H5.488V12.872h3.673V7.345Zm31.268 0v5.527h3.672v15.652a17.415 17.415 0 0 1 2.783-.222 16.213 16.213 0 0 1 2.745.222V10.979a3.556 3.556 0 0 0-3.635-3.635ZM10.679 22.218v3.116h11.906v-3.116Zm0 7.233v3.078h19.547a16.6 16.6 0 0 1 3.152-2.225v-.852Zm30.6 3.3A12.11 12.11 0 1 0 53.372 44.88a12.118 12.118 0 0 0-12.09-12.127Zm-30.6 4.043v3.079h14.8a16.42 16.42 0 0 1 1.372-3.079Zm36.756 1.966a.907.907 0 0 1 .595.149l2.151 2.151c.311.4.546.818 0 1.373l-9.569 9.607a1.22 1.22 0 0 1-1.446 0l-6.863-6.825a.813.813 0 0 1 0-1.187l2.337-2.3a.8.8 0 0 1 1.076 0l4.154 4.192 7.049-7.01a1.164 1.164 0 0 1 .517-.149Z"
    />
  </svg>
)

const AdvantagesList = (): JSX.Element => {
  return (
    <BenefitsList noAnim>
      <BenefitsList.Item theme='gray' icon={(<Folder className="w-6 sm:w-8 h-auto" />)}>
        <span slot="text">
          Faites-nous parvenir, entre 10 jours et 2 mois après la fin de
          votre contrat, votre certificat d’immatriculation original et en
          conserver une copie ainsi que le coupon détachable.
        </span>
      </BenefitsList.Item>
      <BenefitsList.Item theme='primary' icon={(<Enveloppe className="w-6 sm:w-8 h-auto" />)}>
        <span slot="text">
          Le certificat d’immatriculation original est à envoyer
          à l’adresse suivante: <span className="font-bold">BMW Finance TSA 36646
          91097 COURCOURONNES CEDEX.</span>
        </span>
      </BenefitsList.Item>
      <BenefitsList.Item theme='light-gray' icon={(<Clipboard className="w-6 sm:w-8 h-auto" />)}>
        <span slot="text">
          Nous vous enverrons le certificat d’immatriculation barré
          et tamponné ainsi qu'un certificat de cession établi à votre
          nom afin de vous permettre d'effectuer les démarches nécessaires
          pour le changement de propriétaire sur le site de l'ANTS.
        </span>
      </BenefitsList.Item>
    </BenefitsList>
  )
}

export default AdvantagesList
