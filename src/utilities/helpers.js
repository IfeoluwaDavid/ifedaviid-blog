export const getCurrentPageUrl = () => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return url
}
