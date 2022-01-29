export const formatNumber = (num) => {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K'
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + 'B'
  } else if (num < 900) {
    return num
  }
}
