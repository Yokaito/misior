import { useCallback, useMemo } from 'react'

type IUseFormatttedDate = {
  date: Date
}

const useTimezone = () => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const locale = Intl.DateTimeFormat().resolvedOptions().locale

  return useCallback(
    (date: Date) => {
      return Intl.DateTimeFormat(locale, {
        timeZone: timezone,
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(date)
    },
    [timezone, locale],
  )
}

export const useFormattedDate = ({ date }: IUseFormatttedDate) => {
  const format = useTimezone()

  return useMemo(() => format(date), [date, format])
}
