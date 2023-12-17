function formatTime(hours, minutes, seconds, is24HourFormat) {
  const ampm = is24HourFormat ? '': (hours >= 12 ? 'PM' : 'AM')
  const formattedHours = is24HourFormat ? (hours % 12 || 12) : hours
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`
}

function clock() {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  const time24 = formatTime(hours, minutes, seconds, false)
  const time12 = formatTime(hours, minutes, seconds, true)

  console.clear()
  console.log(`24-Hour Format: ${time24}`)
  console.log(`12-Hour Format: ${time12}`)
}

// Update the clock every second
setInterval(clock, 1000)

clock()
