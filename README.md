# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug: an infinite loop caused by improper use of the `useEffect` hook.

## Bug Description
The `MyComponent` component uses `useEffect` to update the `count` state. However, `count` is included in the dependency array, creating an infinite loop because the effect runs whenever `count` changes, causing `count` to change again, triggering the effect repeatedly.

## Solution
The solution involves removing the `count` from the dependencies array if the effect shouldn't run on every `count` change, or using a technique such as `useRef` if you need to track previous state. 