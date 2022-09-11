import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>Introduction to JSX</h1>
                <p>
                    We had already stated in our article on Introduction to ReactJS that React is a declarative, efficient, and flexible JavaScript library for building user interfaces. But instead of using regular JavaScript, React code should be written in something called JSX.
                </p>
                <p>
                    The above code snippet somewhat looks like HTML and it also uses a JavaScript-like variable but is neither HTML nor JavaScript, it is JSX. JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM. We will learn about rendering and DOM in the next article in detail.
                </p>
            </div>
        );
    }
}

export default About;