export default function throttle(fn, delay = 400) {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;

      const ctx = this;
      const args = arguments;

      fn.apply(ctx, args);

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}
