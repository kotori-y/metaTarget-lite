import store from '@/store'

export function select ($event: Event): void {
  const target = ($event.target as HTMLElement).parentElement as HTMLElement
  const text = target.getElementsByTagName('span')[0] as HTMLElement
  if (target.classList.contains('active')) {
    target.classList.remove('active')
    text.classList.remove('active')
    store.dispatch('update_selected_websites', {
      site: target.innerText,
      select: false
    }).then()
    return
  }
  target.classList.add('active')
  text.classList.add('active')
  store.dispatch('update_selected_websites', {
    site: target.innerText,
    select: true
  }).then()
}
