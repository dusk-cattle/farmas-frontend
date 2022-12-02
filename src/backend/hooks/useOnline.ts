import { useContext } from "react";

import { OnlineContext } from "../contexts/online";

function useWatchdog() {
  const onlineState = useContext(OnlineContext);

  return onlineState;
}

export { useWatchdog };
