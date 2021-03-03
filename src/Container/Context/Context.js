import React, { createContext, useContext } from "react";
import { reducer, initState } from "../Reducer/state";
import { useReducer } from "react";
import {roomReducer} from "../Reducer/Room";

const RoomStateContext = createContext(null);
const RoomDispatchContext = createContext(null);

export const RoomProvider = ({ children }) => {
  const [state, redux] = useReducer(roomReducer, initState);

  return (
    <RoomStateContext.Provider value={state}>
      <RoomDispatchContext.Provider value={redux}>
        {children}
      </RoomDispatchContext.Provider>
    </RoomStateContext.Provider>
  );
};

export function useRoomState() {
  return useContext(RoomStateContext);
}

export function useRoomDispatch() {
  return useContext(RoomDispatchContext);
}
