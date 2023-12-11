let i = 0;
const func = () => {
  console.clear();
  setTimeout(func, 1000);
  console.log(i++);
};

func();
