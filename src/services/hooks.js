import { useEffect } from "react"

export function useAsyncEffect(generator, dependencies) {
  useEffect(() => {
    let didCancel = false

    async function fn() {
      const asyncFunction = generator()

      let generatorValue

      do {
        if (generatorValue && generatorValue.value) {
          generatorValue = asyncFunction.next(
            // eslint-disable-next-line no-await-in-loop
            await Promise.resolve(generatorValue.value)
          )
        } else {
          generatorValue = asyncFunction.next()
        }
      } while (!didCancel && !generatorValue.done)
    }

    fn()

    return () => {
      didCancel = true
    }
  }, dependencies)
}
