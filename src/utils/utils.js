export function extendForSelect (obj, label = 'title', value = 'id') {
  return { ...obj, label: obj[label], value: obj[value] }
}
