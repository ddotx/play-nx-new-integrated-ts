import { isEven } from '@ddotx/is-even'

export function isOdd(x: number): boolean {
  return !isEven(x)
}
