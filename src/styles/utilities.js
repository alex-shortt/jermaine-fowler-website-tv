export function twImportant(styles) {
  const importantStyles = {}

  for (const key in styles) {
    if (key) {
      importantStyles[key] = `${styles[key]} !important`
    }
  }

  return importantStyles
}
