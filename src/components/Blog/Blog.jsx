import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div className='container'>
               <Accordion defaultActiveKey="0" className='mt-5'>
                        <Accordion.Item eventKey="0" className='bg-dark text-light'>
                            <Accordion.Header>What is the use of React Router?</Accordion.Header>
                            <Accordion.Body>
                           <strong>React Router</strong> is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

                            ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='bg-dark text-light'>
                            <Accordion.Header>How Context API works ?</Accordion.Header>
                            <Accordion.Body>
                            <strong>Context API </strong> is used to pass global variables anywhere in the code. It helps when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext(). No need to install other dependencies or third-party libraries like redux for state management.

                            It has two properties Provider and Consumer. The Provider acts as a parent it passes the state to its children whereas the Consumer uses the state that has been passed.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className='bg-dark text-light'>
                            <Accordion.Header>Define useRef() hook and How does it work?</Accordion.Header>
                            <Accordion.Body>
                            The <strong> useRef() </strong> is a hook that allows to directly create a reference to the DOM element in the functional component.

                            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
        </div>
    );
};

export default Blog;