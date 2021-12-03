export function select ($event: Event): void {
  const target = ($event.target as HTMLElement).parentElement as HTMLElement
  const text = target.getElementsByTagName('span')[0] as HTMLElement
  if (target.classList.contains('active')) {
    target.classList.remove('active')
    text.classList.remove('active')
    return
  }
  target.classList.add('active')
  text.classList.add('active')
}
