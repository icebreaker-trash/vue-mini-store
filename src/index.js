export function createMapData () {

}

export function createMapComputed () {

}

export function wrapBus (bus) {
  return {
    mapData: () => {},
    mapComputed: () => {}
  }
}

export function wrapObservable (state) {
  return {
    mapData: () => {}
    // mapComputed: () => {}
  }
}
