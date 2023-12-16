Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following
formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

- METHOD1

[PS: GOOGLE GENERATED]

```js
function DisplayCurrentTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var am_pm = date.getHours() >= 12 ? 'PM' : 'AM';
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds + ' ' + am_pm;
}
```

- METHOD2 [have to append am/pm]

```js
const mediumTime = new Intl.DateTimeFormat('en', {
  timeStyle: 'medium',
  hourCycle: 'h24',
});
console.log(mediumTime.format(Date.now()));
```
