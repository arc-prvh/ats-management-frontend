export default function debounce(fn, delay = 400) {
  let timerId = null;

  return function () {
    clearTimeout(timerId);

    const ctx = this;
    const args = arguments;

    timerId = setTimeout(() => fn.apply(ctx, args), delay);
  };
}
