import { FC, PropsWithChildren } from "react";

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-[100dvw] h-[100dvh] overflow-y-scroll overflow-x-hidden app-background flex justify-center">
    <main className="px-[16px] lg:px-0 w-full max-w-screen-sm md:max-w-screen-md lg:max-w-[900px] h-[100dvh] resize-anim">
      {children}
    </main>
  </div>
);
