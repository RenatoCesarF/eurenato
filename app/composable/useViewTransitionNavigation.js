

export function useViewTransitionNavigation() {
  const router = useRouter()

  function navigate(to) {
    if (
      import.meta.client &&
      document.startViewTransition
    ) {
      document.startViewTransition(async () => {
        await router.push(to)
      })
    } else {
      router.push(to)
    }
  }

  return { navigate }
}
