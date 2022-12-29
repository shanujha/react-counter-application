import React, { useCallback, useEffect, useState } from "react";
import { decrementApi, incrementApi, load } from "./api";

export const useCounterHook = () => {
  const [counter, setCount] = useState(null);
  const [loading, setLoading] = useState("pending");

  useEffect(() => {
    const t = setTimeout(() => {
      setCount(load());
      // logic to check if above code is succes or not
      // if success load the app
      setLoading("idle");
    }, 3000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  const increment = useCallback(() => {
    setLoading("pending");
    //TODO: Increment the state of counter
    const newCount = incrementApi(counter);
    setTimeout(() => {
      setCount(newCount);
      setLoading("idle");
    }, 1000);
  }, [counter]);

  const decrement = useCallback(() => {
    setLoading("pending");
    //TODO: Increment the state of counter
    const newCount = decrementApi(counter);
    setTimeout(() => {
      setCount(newCount);
      setLoading("idle");
    }, 1000);
  }, [counter]);

  return {
    state: {
      counter,
      loading,
    },
    functions: {
      increment,
      decrement,
    },
  };
};
