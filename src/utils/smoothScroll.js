export const smoothScroll = (target) => {
  const element = document.querySelector(target)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - 80

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

