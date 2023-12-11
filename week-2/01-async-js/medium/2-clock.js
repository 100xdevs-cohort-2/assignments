function clock() {
   const appendZero = (unit) => '0' + unit;

   let hrs =
      new Date().getHours() <= 12
         ? new Date().getHours()
         : new Date().getHours() - 12;
   hrs = hrs < 10 ? appendZero(hrs) : hrs;

   const min =
      new Date().getMinutes() < 10
         ? appendZero(new Date().getMinutes())
         : new Date().getMinutes();

   const sec =
      new Date().getSeconds() < 10
         ? appendZero(new Date().getSeconds())
         : new Date().getSeconds();

   const AMPM = new Date().getHours() < 12 ? 'AM' : 'PM';

   return hrs + ':' + min + '::' + sec + ' ' + AMPM;
}

setInterval(() => {
   console.log(clock());
}, 1000);
