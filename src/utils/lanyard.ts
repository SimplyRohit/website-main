import { useLanyard } from "react-use-lanyard";

export function useStatus() {
  const userId = "";
  const result = useLanyard({
    userId,
    socket: true,
  });

  return {
    ...result,
  };
}
