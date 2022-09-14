declare type ReactSmoothScrollerHook = (ease?: number) => {
    container: React.RefObject<HTMLDivElement>;
    spacer: React.RefObject<HTMLDivElement>;
};
declare const useSmoothScroller: ReactSmoothScrollerHook;
export default useSmoothScroller;
