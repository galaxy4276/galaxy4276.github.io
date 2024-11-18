
const isOdd = (index: number) => index % 2 === 0;

export const splitTwoSide = <T, >(data: T[]) => {
  const even: T[] = [];
  const odd: T[] = [];

  for (let i = 0; i < data.length; i++) {
    if (isOdd(i)) {
      odd.push(data[i]);
    } else {
      even.push(data[i]);
    }
  }

  return [even, odd];
};
