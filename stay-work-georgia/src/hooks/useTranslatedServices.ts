import { useTranslation } from 'react-i18next'
import { SERVICES } from '../data/services'
import type { Service } from '../types'

export function useTranslatedServices(): Service[] {
  const { t } = useTranslation()

  return SERVICES.map((s) => ({
    ...s,
    title: t(`services.${s.key}.title`),
    short: t(`services.${s.key}.short`),
    description: t(`services.${s.key}.description`),
    whatsIncluded: s.whatsIncluded.map((item, i) => ({
      title: t(`services.${s.key}.includes.${i}.title`),
      desc: t(`services.${s.key}.includes.${i}.desc`),
    })),
  }))
}
