/**
 * @typedef {import('webpack')}
 */

export function getComponentsMap (path, deep, regexp = /.vue$/) {
  const requireComponent = require.context(path, deep, regexp)
  return requireComponent.keys().reduce((acc, fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName.replace(/^\.[\\/]/, '').replace(/\.\w+$/, '')
    acc[componentName] = componentConfig.default || componentConfig
    return acc
  }, {})
}
