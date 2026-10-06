import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full mx-auto px-4 md:px-0 md:w-3xl lg:w-5xl">
            {children}
        </div>
    );
}