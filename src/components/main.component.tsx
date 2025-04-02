import { PropsWithChildren } from "react";

export const MainComponent = ({ children }: PropsWithChildren) => {
  return (
    <main className="px-4 py-6 max-w-container lg:px-9 lg:py-9 lg:m-auto min-h-main">
      {children}
    </main>
  );
};
