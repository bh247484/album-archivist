// export module AlbumCardUtils {
const chromatic = [
  'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3'
]

const shiftScale = (shift: number, maj: Array<number>) => {
  let shiftedMode = []
  for (let i = 0; i < maj.length; i++) {
    shiftedMode.push(maj[(shift + i) % maj.length])
  }
  return shiftedMode
}

// modes by interval
const ionian = [2, 2, 1, 2, 2, 2, 1]
const dorian = shiftScale(2 - 1, ionian)
const phrygian = shiftScale(3 - 1, ionian)
const lydian = shiftScale(4 - 1, ionian)
const mixolydian = shiftScale(5 - 1, ionian)
const aeolian = shiftScale(6 - 1, ionian)
const locrian = shiftScale(7 - 1, ionian)

const getMode = (rgb_array: Array<number>) => {
  const [red, green, blue] = rgb_array

  const total = red + green + blue
  const percent_red = red / total
  const percent_green = green / total
  const percent_blue = blue / total

  if (percent_red > percent_blue && percent_red > percent_green) {
    if (percent_red > 60) {
      return mixolydian
    } else {
      return phrygian
    }
  } else if (percent_blue > percent_red && percent_blue > percent_green) {
    if (percent_blue > 60) {
      return lydian
    } else {
      return ionian
    }
  } else if (percent_green > percent_blue && percent_green > percent_red) {
    if (percent_green > 60) {
      return aeolian
    } else {
      return dorian
    }
  } else {
    return locrian
  }
}

export function getScale(root_index: number, rgb_array: Array<number>) {
  const root = chromatic[root_index]
  const mode = getMode(rgb_array)

  const scaleArray = []
  // get index of root
  const rootIndex = chromatic.indexOf(root)
  let currentIndex = rootIndex
  for (let i = 0; i < mode.length; i++) {
    scaleArray.push(chromatic[currentIndex % chromatic.length])
    currentIndex += mode[i]
  }
  return scaleArray
}
// }

