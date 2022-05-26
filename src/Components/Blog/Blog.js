import React from 'react';
import image from '../../person 1.png'
import image2 from '../../person 2.png'
import image3 from '../../person 3.png'
import image4 from '../../person-4.jpg'
const Blog = () => {
    return (
        <div style={{ margin: "20%" }} >
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image} alt='' />
                    <div >
                        <h1 >Will Smith</h1>
                        <h1 >Posted On 20th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style text-red-700 text-center text-3xl"> What are the different ways to manage a state in a React application??</h1>
                    <p className="sp-style p-5 text-2xl">The four major forms of state you need to keep track of in your React projects are: Local state, Global state, Server state, and URL state. A component's local state refers to the data it keeps. Managing local state in React is often accomplished via the usage of the useState hook. Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state. You'd need local state for things like showing or hiding a modal component and keeping track of input data for forms that have been disabled. Data that is shared across different components is referred to as global state. When data has to be accessed and updated across many parts of our program, we need to use global state. Authenticated user state is a frequent example of a global state. In order to get or update data from an external server, you must handle a variety of states, including loading and error state.</p>



                </div>

            </div>

            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image2} alt='' />
                    <div >
                        <h1 >Chris Hemsworth.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">How does prototypical inheritance work?
                    </h1>
                    <p className="sp-style p-10 text-2xl">
                        There is an unnoticed [[Prototype]] property in every object in addition to its methods and attributes. JavaScript's Prototypal Inheritance capability may be used to provide extra methods and properties to objects. Inheritance is a process through which an object may take on the traits and behaviors of another object. The [[Prototype]] of an object may typically be obtained and modified using the Object.getPrototypeOf and Object.setPrototypeOf methods. The __proto__ method is now often used in modern languages to set it.
                    </p>

                </div>

            </div>
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image3} alt='' />
                    <div >
                        <h1 >Leonardo DiCaprio.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>

                    <p className="sp-style p-5 text-2xl">Using setState allows you to move a state from one component to another without having to change the original. SetState is required for integrating an item into the current state (). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup. To make changes to the object's current state, we use the setState() method. You may be sure that the component's current state has been maintained by requesting a re-render. If a synchronous call is performed to change an object's state, it may not be updated on the console at the right time.</p>


                </div>

            </div>
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image4} alt='' />
                    <div >
                        <h1 >Lucas Hemsworth.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">How will you improve the performance of a React Application??</h1>
                    <p className="sp-style p-10 text-2xl">
                    A React application may be made more efficient in a variety of ways. As an example, wherever possible, keep state of components local. Memorying React components to avoid unwanted re-renders is also a good strategy. In addition, dynamic imports in React allow for code-splitting (). React's virtualization of windows or lists. In React, photos may be loaded in a 'lazy' manner. Making Use of Structural Consistency. As many chunk files as you'd want
                    </p>

                </div>

            </div>
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image4} alt='' />
                    <div >
                        <h1 >Lucas Hemsworth.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className="sp-style p-10 text-2xl">
                    In order to discover a product by its name in an array, we will use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. For every index in the array, callbackFn is called, not only those that have been given values. If you use the callbackFn function offered by find, you may change the array that it is called on. Before the initial callbackFn activation, the items found by find are pre-set. Using Javascript's arr.find() function, you may obtain the value of the first member in an array that meets your criteria. If any of the array's items meet the criterion, the first one to meet it will print. Empty array items are not supported by this method, and it does not alter the original one..
                    </p>

                </div>

            </div>
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image4} alt='' />
                    <div >
                        <h1 > Hemsworth.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">What is a unit test? Why should write unit tests??</h1>
                    <p className="sp-style p-10 text-2xl">
                    Using JavaScript Unit Testing, a web page or web application module may be tested using JavaScript code. After that, it's included into the HTML as an inline event handler and tested in the browser to ensure that all of the needed features are available. These unit tests are then grouped together in a test suite for easy access. Unit testing in JavaScript is made easier by a variety of frameworks. The Unit.js library, for example, is a Javascript assertion library that runs on Node.js and the browser. For React and React Native web apps, Jest is a JavaScript-based open-source testing framework. With the Jest framework, this complexity may be greatly minimized. If you're using Mocha, Jasmine, Karma or protractor (a testing framework for Angular projects), you'll be able to use it with any of these frameworks. Node.js and browser-based test framework Mocha. Serial test execution in this framework simplifies asynchronous testing.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Blog;