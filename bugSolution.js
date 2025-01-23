```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    // Only update if count changed from initial value
    if (count !== prevCount.current) {
        console.log("Count updated");
    }
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```