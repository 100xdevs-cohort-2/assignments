

const calcuTIme = () => {
  const d = new Date()
  const h = d.getHours()
  const m = d.getMinutes()
  const s = d.getSeconds()

  console.log(h+":"+m+":"+s)
  setTimeout(calcuTIme,1000)
}



calcuTIme()
