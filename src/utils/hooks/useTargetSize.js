import React from "react";

export const useTargetSize = () => {
  const [size, setSize] = React.useState();
  const resizeObserverRef = React.useRef();
  const ref = React.useRef();

  React.useLayoutEffect(() => {
    setSize(ref.current.getBoundingClientRect());
  }, [ref.current]);

  React.useLayoutEffect(() => {
    resizeObserverRef.current = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.contentBoxSize) {
          const contentBoxSize = Array.isArray(entry.contentBoxSize)
            ? entry.contentBoxSize[0]
            : entry.contentBoxSize;
          setSize({
            width: Math.floor(contentBoxSize.inlineSize),
          });
        }
      }
    })
    resizeObserverRef.current.observe(ref.current);

    return () => {
      resizeObserverRef.current.unobserve(ref.current)
    };
  }, []);

  return [size, ref];
}
