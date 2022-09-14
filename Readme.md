# React Smooth Scroller Hook

Simple React hook for Smooth Scrolling Effect

Usage

```
import useSmoothScroller from "react-smooth-scroller-hook";

const App = ()=>{
    const {container,spacer} = useSmoothScroller(0.8);
    return (
        <>
            <div ref={container}>Add your content here</div>
            <div ref={spacer}></div>
        </>
    )
}
```

## Arguments

- ease:number = 0.4 [min=0,max=1]
