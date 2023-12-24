export function formatCurrency(amount, currency = 'IDR', lang = 'id-ID') {
  const formatter = new Intl.NumberFormat(lang, {
    style: 'currency',
    currency,
  })

  return formatter.format(amount)
}
