# Nooks

Collection of React Hooks ready to install with NPM

-   [x] useInput
-   [x] useTabs
-   [x] useTitle
-   [x] useClick
-   [x] useHover
-   [x] useConfirm
-   [x] usePreventLeave
-   [x] useBeforeLeave
-   [x] useFadeIn
-   [x] useNetwork
-   [x] useScroll
-   [x] useFullScreen
-   [x] useNotification
-   [x] useAxios

# Usage

```js
import useInput from "@nooks/use-input";

const App = () => {
    const noAt = (value) => !value.includes("@");
    const name = useInput("Mr. ", noAt);
    return (
        <div className="App">
            <h1>Hello</h1>
            <input placeholder="Name" {...name.props} />
        </div>
    );
};
```
