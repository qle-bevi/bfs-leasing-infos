export const namedSlotToArrayElement = (props: Record<string, any>, key: string): any[] => {
  const arr: any[] = []
  let i = 1

  console.log(props)

  while (true) {
    if (props[`${key}${i}`] === undefined) {
      break
    }

    arr.push(props[`${key}${i}`])
    i++
  }

  console.log(arr)
  return arr
}
