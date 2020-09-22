import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handle: Function) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (
                !ref.current ||
                ref.current.contains(event.target as HTMLElement)
            ) {
                return;
            }
            handle(event);
        };
        document.addEventListener("click", listener);
        return () => {
            document.removeEventListener("click", listener);
        };
    }, [ref, handle]);
}

export default useClickOutside;
