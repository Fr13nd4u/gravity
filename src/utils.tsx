import { useEffect, useState } from "react";

export const useNumbers = async (url: string) => {
  const [show, setShow] = useState<boolean>(false);

  const fetchData = () => {
    const num1 = fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));

    const num2 = fetch(url)
      .then((res) => res.json())
      .catch((e) => console.log(e));

    Promise.all([num1, num2]).then((values) => {
      setTimeout(() => {
        if (isBothEven(values[0], values[1])) {
          setShow(true);
        } else {
          fetchData();
        }
      }, 500);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return show;
};

const isBothEven = (num1: number, num2: number) => {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
