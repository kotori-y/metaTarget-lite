import store from '@/store'

export function select ($event: Event): void {
  const target = ($event.target as HTMLElement).parentElement as HTMLElement
  if (target.classList.contains('active')) {
    store.dispatch('update_selected_websites', {
      site: target.innerText,
      select: false
    }).then()
    return
  }
  store.dispatch('update_selected_websites', {
    site: target.innerText,
    select: true
  }).then()
}
