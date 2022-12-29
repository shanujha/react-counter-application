import React, { useState } from "react";
import { counterSlice, useCounterHook } from ".";

export const CounterScreen = () => {
  const { state, functions } = useCounterHook();

  // if(state.loading !== 'idle'){
  //   return <div>Loading...</div>
  // }

  return (
    <div>
      <div>Count: {state.loading != "idle" ? "⌛" : state.counter}</div>
      <div>
        <br />
        <button
          disabled={state.loading != "idle"}
          onClick={functions.increment}
        >
          Increment
        </button>

        <button
          disabled={state.loading != "idle"}
          onClick={functions.decrement}
        >
          decrement
        </button>
      </div>
    </div>
  );
};
