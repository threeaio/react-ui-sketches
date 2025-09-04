import { useFakeRequest } from "@/components/features/stateful-button/backend";
import { StatefulButton } from "./stateful-button";

export const StatefulButtonShowcase = () => {
  const fakeRequest = useFakeRequest();

  return (
    <div className="p-12 flex-1 flex flex-col gap-4 justify-center items-start">
      <pre>{JSON.stringify(fakeRequest.status, null, 2)}</pre>
      <StatefulButton
        size="lg"
        state={fakeRequest.status}
        mutation={fakeRequest}
      >
        Stateful Button
      </StatefulButton>
    </div>
  );
};
