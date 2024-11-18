let timer: number;

export const debounceEvent = (callback: (args: unknown) => void, delay: number) =>
  (...args: unknown[]) => {
    clearTimeout(timer);
    console.log("clearTimeout!");
    timer = window.setTimeout(() => callback(args), delay);
  };
