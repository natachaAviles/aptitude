export const getClassModifiers = (base, modifiers) => {
  const classes = [base]

  Object.keys(modifiers).forEach(modifier => {
    if (!modifiers[modifier]) return
    classes.push(`${base}--${modifier}`)
  })

  return classes.join(' ')
}