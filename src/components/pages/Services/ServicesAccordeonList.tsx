import type { SVGProps } from 'react'
import AccordeonList from '../../AccordeonList'

const Cross = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" {...props}>
    <g data-name="Groupe 34">
      <path
        fill="currentColor"
        d="M14 18 4 8l-4 4V0h12L8 4l10 10L28 4l-4-4h12v12l-4-4-10 10 10 10 4-4v12H24l4-4-10-10L8 32l4 4H0V24l4 4Z"
        data-name="Trac\xE9 57"
      />
    </g>
  </svg>
)

const Euro = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 44.684 48.001"
    {...props}
  >
    <path
      fill="currentColor"
      d="M26.312.001c-9.521-.074-18.727 7.377-21 18.531h-2.97A2.526 2.526 0 0 0-.002 21.22a2.553 2.553 0 0 0 2.344 2.718h21.531a2.553 2.553 0 0 0 2.344-2.718 2.526 2.526 0 0 0-2.344-2.688h-7.219c.592-4.352 2.177-8.017 5.938-9.812a10.51 10.51 0 0 1 6.906-.938 9.215 9.215 0 0 1 5.844 4.469c-1.3 9.248 12.042 9.2 8.843-.063S32.896.053 26.312.001ZM2.342 27.376a2.392 2.392 0 0 0-2.344 2.437 2.365 2.365 0 0 0 2.344 2.407h3.25a21.588 21.588 0 0 0 20.72 15.781c6.584-.046 14.677-2.642 17.875-10.969s-10.145-8.346-8.845-.031a9.148 9.148 0 0 1-5.844 4 11.558 11.558 0 0 1-6.906-.844c-3.468-1.488-5.117-4.422-5.813-7.937h7.094a2.365 2.365 0 0 0 2.344-2.407 2.392 2.392 0 0 0-2.344-2.437H2.342Z"
    />
  </svg>
)

const Switch = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48.001 38.781"
    {...props}
  >
    <path
      fill="currentColor"
      d="M23.469 0a3.281 3.281 0 0 0-3.031 2.031A3.694 3.694 0 0 0 20.25 4a3.611 3.611 0 0 0 .875 1.781l.063.063 6.344 6.468 2.593-2.593-5.843-6.063 19.438.094c.261 0 .35-.005.531 0 .006.248 0 .411 0 .812l.062 19.219-6.875-6.562-10.219 10.593 2.594 2.532 7.812-7.938 4.563 4.5a3.69 3.69 0 0 0 3.75.688 3.353 3.353 0 0 0 2.063-3.063V4.562c0-.637-.015-1.2-.063-1.718a2.976 2.976 0 0 0-.687-1.782 3.1 3.1 0 0 0-1.906-.937A11.7 11.7 0 0 0 43.72.062L23.469 0Zm-4.312 9.25a2.584 2.584 0 0 0-1.907.75l-8.057 8.062-6.125-6.093a1.759 1.759 0 0 0-3.063 1.093l.063 21.844c.01 2.921 1.1 3.808 3.812 3.813l21.839.062a1.758 1.758 0 0 0 1.094-3.062l-6.094-6.125 8.063-8.063a2.769 2.769 0 0 0-.063-3.875l-7.594-7.594a2.9 2.9 0 0 0-1.968-.812Z"
    />
  </svg>
)

const ServicesAccordeonList = (): JSX.Element => (
  <AccordeonList>
    <AccordeonList.Item
      title="Liberté de choix"
      icon={(<Cross className="w-8 h-auto" />)}
    >
      <p>Choisissez en fonction de vos besoins la durée et le kilométrage qui vous correspondent le mieux.</p>
    </AccordeonList.Item>
    <AccordeonList.Item
      title="Maîtrise des coûts"
      icon={(<Euro className="w-8 h-auto" />)}
    >
      <p>Choisissez en fonction de vos besoins la durée et le kilométrage qui vous correspondent le mieux.</p>
    </AccordeonList.Item>
    <AccordeonList.Item
      title="Cessibilité"
      icon={(<Switch className="w-8 h-auto" />)}
    >
      <p>Choisissez en fonction de vos besoins la durée et le kilométrage qui vous correspondent le mieux.</p>
    </AccordeonList.Item>
  </AccordeonList>
)

export default ServicesAccordeonList
