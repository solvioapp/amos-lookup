import { searchEngines as engines } from '../constants/searchEngines'

// This algorithm should work on any number of windows >= 0
const openWindows = (query, checked) => {
  // Get viewport width and height
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) + 60;

  console.log('vw, vh', vw, vh)
  // Find which engines windows to open
  let count = 0
  for (let i = 0; i < engines.length; i++) {
    const id = engines[i].id
    if (checked[id]) {
      count++
    }
  }

  const total = count
  count = 0

  const rows = Math.ceil(total / 4)

  // Height is same
  const height = vh / rows
  const tops = [],
        widths = [],
        lefts = []

  switch (total) {
    // This algorithm is a pain, I wish I was using ReactML :D
    case 0:
      break;
    case 1:
      tops[0] = 0
      widths[0] = vw
      lefts[0] = 0
      break;
    case 2:
      tops[0] = 0
      tops[1] = 0
      widths[0] = vw / 2
      widths[1] = vw / 2
      lefts[0] = 0
      lefts[1] = vw / 2
      break;
    case 5:
      tops[0] = 0
      tops[1] = 0
      tops[2] = 0
      tops[3] = vh / 2
      tops[4] = vh / 2
      widths[0] = vw / 3
      widths[1] = vw / 3
      widths[2] = vw / 3
      widths[3] = vw / 2
      widths[4] = vw / 2
      lefts[0] = 0
      lefts[1] = vw / 3
      lefts[2] = 2 * vw / 3
      lefts[3] = 0
      lefts[4] = vw / 2
      break;
    default:
      // Number of rows of 3 columns
      // If x = total % 4, the map is (0,0), (1,3), (2,2), (3,1)
      const threes = (4 - (total % 4)) % 4
      const fours = rows - threes
      for (let i = 0; i < total; i++) {
        if (i < fours * 4) {
          // i is in a row of 4 columns
          // width is same for all windows
          widths[i] = vw / 4
          tops[i] = Math.floor(i / 4) * vh / rows
          lefts[i] = i % 4 * vw / 4
        } else {
          // i is in a row of 3 columns
          // width is same
          widths[i] = vw / 3

          const countAux = i - 4 * fours
          tops[i] = (fours + Math.floor(countAux / 3)) * vh / rows
          lefts[i] = countAux % 3 * vw / 3
        }
      }

  }
  for (let i = 0; i < engines.length; i++) {
    const engine = engines[i]
    console.log('a', widths[count], height, tops[count], lefts[count])
    if (checked[engine.id]) {
      console.log('opening window', )
      console.log('engine.urlPrefix, engine.urlPostfix', engine.urlPrefix, engine.urlPostfix)
      console.log('query', query)
      const url = (engine.urlPrefix || '') + query + (engine.urlPostfix || '')
      console.log('url ', url)
      window.open(url, '', `
        width=${widths[count]},
        height=${height},
        top=${tops[count]}px,
        left=${lefts[count]}px,
        location=0,
        menubar=0,
        status=0,
        titlebar=0,
        toolbar=0,
      `)

      count++
    }
  }
}

export default openWindows