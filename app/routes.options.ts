
import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {

    // Ao voltar pelo histórico, restaura a posição exata.
    if (savedPosition) {
      return {
        ...savedPosition,
        behavior: 'auto',
      }
    }

    const isProjectDetail = (path: string) =>
      /^\/projects\/[^/]+\/?$/.test(path)

    const isHome = (path: string) =>
      path === '/'

    // Ao abrir um projeto, não movimenta a página.
    if (
      isHome(from.path) &&
      isProjectDetail(to.path)
    ) {
      return false
    }

    // Se não houver posição salva no retorno,
    // não tenta fazer uma rolagem automática.
    if (
      isProjectDetail(from.path) &&
      isHome(to.path)
    ) {
      return false
    }

    return { top: 0, left: 0 }
  },
}
