/* eslint-disable react-refresh/only-export-components */
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const ModalContext = createContext<{
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>
}>({
  state: false,
  setState: () => null
})

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={{ state, setState }}>{children}</ModalContext.Provider>
  )
}
