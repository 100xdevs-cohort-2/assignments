setInterval(function (){
  var date = new Date()
  var hh = date.getHours().toString();
  var mm = date.getMinutes().toString();
  var ss = date.getSeconds().toString();

  if (mm.length == 1) {
    mm = "0" + mm;
  }
  if (ss.length == 1) {
    ss = "0" + ss;
  }
  var TwentyfourHourFormat = hh + ":" + mm + ":" + ss;

  var timeOfDay = "AM"
  if (parseInt(hh) > 12) {
    hh = (parseInt(hh)-12).toString();
    timeOfDay = "PM";
  }

  var TweleveHourFormat =  hh + ":" + mm + ":" + ss + " " + timeOfDay;
  console.log(TweleveHourFormat + " , " + TwentyfourHourFormat);
}, 1000);

