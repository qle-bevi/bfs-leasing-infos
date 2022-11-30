import type { ContractInfo } from './typings'

export const contracts: ContractInfo[] = [
  { name: 'LOA', cosyName: 'Contrat LOA', path: 'loa', textInfo: 'Location avec Option d’Achat' },
  { name: 'PassLease LOA', cosyName: 'Contrat PassLease LOA', path: 'passlease-loa', textInfo: 'Location avec Option d’Achat puis reprise du véhicule par BMW si l’option n’est pas levée' },
  { name: 'LLD', cosyName: 'Contrat LLD', path: 'lld', textInfo: 'Location Longue Durée sans option d’achat' },
  { name: 'PassLease LLD', cosyName: 'Contrat PassLease LLD', path: 'passlease-lld', textInfo: 'Location Longue Durée sans option d’achat puis reprise du véhicule par BMW' },
  { name: 'Crédit', cosyName: 'Crédit', path: 'credit', textInfo: 'Véhicule BMW financé par Crédit' },
  { name: 'Crédit Ballon', cosyName: 'Crédit ballon', path: 'credit-ballon', textInfo: 'Véhicule BMW financé par Crédit Ballon' }
]
