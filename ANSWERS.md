Question 1: What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
    Ans: PropTypes is a javascript library, which in react is used for checking the typeof (string, object, array, number, func) 
    our props in any container/component. Apart from helping us improve error tracking, when working on a dev-team, PropTypes 
    allows us to communicate to our front-end/back-end peers exactly what our component expects to receive.

Question 2: Describe a life-cycle event in React?
    Ans: All life-cycle events are ran within class type components. The main purpose for them, is to allow
    the programmer to have more control over how react transitions from state to state. For example 'constructor' can
    help us set up or state with values before we render our component. 'componentDidMount' allows us to safely fetch
    data from APIs without obstructing react, and 'shouldComponentUpdate' allows us to optimize our app so react does not
    re-render if it doesn't need to.

Question 3: Explain the details of a Higher Order Component?
    Ans: The primary behavior of a Higher Order Component (HOC) is to receive a component(s) and return
        a component. The main use of HOCs is to implement some basic setup that is shared between components.
        They are essentially higher-order-functions that return a class, which extends 'Component.'
        As an example, they can be used to expose different views of our app, or to handle subscription/unsubscription 
        logic for components and their particular datasets.

Question 4: What are three different ways to style components in React? Explain some of the benefits of each.
    Ans: 
        Way-1: 
        Css-universal sheet: Actual .css file that is imported into a js file. Allows us to still use
                        Emmet shortcuts, and IDE linting/color-context, but will interfere with all other
                        js files that have jsx with same className.
        Way-2:
        Css-scoped sheet: Actual .css file that is imported into a js file. Simalar benefits of 'Way-1'
                        but keepts our styles scoped to one js file, but takes more time to setup, and runs
                        npm eject, which we cannot undo.
        Way-3:
        Css in JS: Example, styled-components. Allows us to write css-like code in our js file; converts over to css on commpiling.
                        Very powerful way of coupling app state/props and app styling, less files to deal with as a developer. Gives
                        us scoped styles for free. Does not offer Emmet shortcuts or IDE linting/color-context. Makes our js files longer, 
                        and sometimes consist of mostly css styles.

        