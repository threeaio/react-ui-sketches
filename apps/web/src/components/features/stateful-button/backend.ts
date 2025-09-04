import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";

const fakeResponseSuccess = {
  success: true,
  message: "Request successful",
};

export const fakeRequest = () => {
  console.log("fakeRequest");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject(new Error("Request failed"));
      }
      resolve(fakeResponseSuccess);
    }, 5000 * Math.random());
  });
};

export const useFakeRequest = (selfReset = false) => {
  const resetRef = useRef<() => void>(() => {});
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const mutation = useMutation({
    mutationFn: fakeRequest,
    onMutate: () => {
      console.log("onMutate");
      if (timeoutId) {
        console.log("onMutate clear timeout");
        console.log("timeout", timeoutId);
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    },
    onSettled: () => {
      if (selfReset) {
        const timeoutHere = setTimeout(() => resetRef.current(), 5000);
        setTimeoutId(timeoutHere);
      }
    },
  });
  resetRef.current = () => mutation.reset();
  return mutation;
};
