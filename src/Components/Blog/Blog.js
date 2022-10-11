import React from 'react';

const Blog = () => {
    return (
        <section className="bg-gray-800  rounded shadow-lg text-gray-100 m-20 p-5 h-9/12">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl"> Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What is the perpose of react router?</summary>
			<div className="px-4 pb-4">
				<p>React Router is a standard library for routing in React. It enables the      navigation among views of various components in a React Application, allows  changing the browser URL, and keeps the UI in sync with the URL.
                     Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
					 </p>
			</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">How does context API works?</summary>
				<div className="px-4 pb-4">
					<p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">What do you know about useRef Hooks ?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If you invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    );
};

export default Blog;