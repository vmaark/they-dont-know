import React, { FC } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { IConfettiOptions } from "react-confetti/dist/types/Confetti";

export const ConfettiEffect: FC<Partial<IConfettiOptions>> = (props) => {
  const { width, height } = useWindowSize();
  return <Confetti {...props} width={width} height={height} />;
};
