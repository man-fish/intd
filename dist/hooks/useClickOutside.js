import { useEffect } from "react";
function useClickOutside(ref, handle) {
    useEffect(function () {
        var listener = function (event) {
            if (!ref.current ||
                ref.current.contains(event.target)) {
                return;
            }
            handle(event);
        };
        document.addEventListener("click", listener);
        return function () {
            document.removeEventListener("click", listener);
        };
    }, [ref, handle]);
}
export default useClickOutside;
