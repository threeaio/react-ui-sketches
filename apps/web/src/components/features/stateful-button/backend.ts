import { useMutation } from "@tanstack/react-query";

const fakeResponseSuccess = {
  success: true,
  message: "Request successful",
};

const fakeResponseError = (e: Error) => {
  return {
    success: false,
    message: e.message,
  };
};

export const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        reject(new Error("Request failed"));
      }
      resolve(fakeResponseSuccess);
    }, 5000 * Math.random());
  });
};

export const useFakeRequest = () => {
  return useMutation({
    mutationFn: fakeRequest,
  });
};
