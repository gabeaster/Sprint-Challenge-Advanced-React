- [ ] Why would you use class component over function components (removing hooks from the question)?

Functional components are Javascript functions that take in props. Class components require React be extended and a render method that will return React Element. When state isn't needed, functional components make more sense- there's no lifecycle methods that need to be taken into account and you don't need this.whatever for functional components like you do when using state in class components. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount() {is called once to signal that the component and it's pieces have rendered properly}
componentDidUpdate() {is invoked after state updates take place. } 
componentWillUnmount() {is called after a component is removed from the DOM and generally cleans up }

- [ ] What is the purpose of a custom hook?

Custom hooks let us write DRY code and reuse state for other components. They also keep our code cleaner. 

- [ ] Why is it important to test our apps?

Testing is important to find any bugs, debug, and provide a fluent, reliable user experience. 