import React from "react";

// components
import List from "./course-components/List";
import Heading from "./course-components/Heading";
import P from "./course-components/P";
import B from "./course-components/B";
import Ul from "./course-components/Ul";
import Point from "./course-components/Point";
import Li from "./course-components/Li";

const Course = () => {
    return <>
        <div className="my-4 mb-20 main-text flex flex-col gap-y-5 justify-center items-center">
            <h2 className="font-semibold my-4 text-[24px]">Industrial Training In Delhi</h2>

            <div className="px-4 w-full flex flex-col justify-start text-start items-start gap-y-4">
                <div>
                    <List title="Course Information">Frontend Development Industrial Training</List>
                    <List title="Course Duration">3 Months (Crash Course)</List>
                    <List title="Fee">₹5000/- per month</List>
                    <List title="Offered By">Koncept Software Solutions</List>
                </div>

                <div>
                    <Heading>Overview</Heading>
                    <P>
                        Koncept Software Solutions is pleased to offer a comprehensive and industry-driven <B>Frontend Development Industrial Training</B> program. The 3-month crash course is designed to provide aspiring developers with the latest knowledge and hands-on experience in web development technologies. The curriculum includes essential skills such as HTML, CSS, Tailwind CSS, JavaScript, ReactJS, Redux, GitHub, CRM systems, Software Design, Validations, Ant Design, Material Tailwind, DataTable, ApexCharts, SCSS, React-PDF, and more. Our goal is to ensure that students are ready for real-world projects, equipped with the technical expertise and problem-solving abilities required in today's web development landscape.
                    </P>
                </div>

                <div>
                    <Heading>Course Structure</Heading>
                    <P>
                        The <B>Frontend Development Industrial Training</B> program covers a wide range of frontend technologies, libraries, and frameworks. Each module is designed to provide in-depth knowledge and hands-on experience, preparing students for their future roles in the development industry.
                    </P>
                </div>

                <Ul title="Module 1" value="HTML & CSS">
                    <li>Basics of HTML5, HTML elements, and attributes</li>
                    <li>Advanced CSS3: Flexbox, Grid, Animations, Transitions</li>
                    <li>Responsive Web Design and Media Queries</li>
                    <li>TailwindCSS fundamentals for rapid UI development</li>
                    <li>Hands-on Project: Building a responsive webpage with HTML, CSS, and TailwindCSS</li>
                </Ul>

                <Ul title="Module 2" value="JavaScript">
                    <li>JavaScript fundamentals: Variables, Functions, Arrays, Objects, Loops</li>
                    <li>ES6+ features: Arrow functions, Template literals, Destructuring, Promises</li>
                    <li>DOM Manipulation and Event Handling</li>
                    <li>Asynchronous JavaScript: Fetch API, Async/Await</li>
                    <li>Hands-on Project: Building interactive JavaScript applications</li>
                </Ul>

                <Ul title="Module 3" value="ReactJS">
                    <li>Introduction to ReactJS: Components, JSX, and Props</li>
                    <li>React State Management: useState, useEffect, useContext</li>
                    <li>Building Single Page Applications (SPA) with React</li>
                    <li>React Router for navigation and routing</li>
                    <li>Hands-on Project: Creating a dynamic web application with ReactJS</li>
                </Ul>

                <Ul title="Module 4" value="Redux">
                    <li>Introduction to Redux: Actions, Reducers, Store</li>
                    <li>Managing global state with Redux</li>
                    <li>Connecting Redux to React applications</li>
                    <li>Thunk Middleware for asynchronous actions</li>
                    <li>Hands-on Project: Implementing state management in a React app with Redux</li>
                </Ul>

                <Ul title="Module 5" value="Version Control with Git & GitHub">
                    <li>Introduction to Git: Cloning, Branching, Merging</li>
                    <li>Working with GitHub for collaboration and project hosting</li>
                    <li>Version control best practices</li>
                    <li>Hands-on Project: Managing code repositories using Git and GitHub</li>
                </Ul>

                <Ul title="Module 6" value="CRM Systems & Software Designing">
                    <li>Understanding the basics of CRM systems and their role in business operations</li>
                    <li>Designing user interfaces for CRM applications</li>
                    <li>Data flow in CRM systems: Implementing CRUD functionality</li>
                    <li>Software design principles: MVC, MVVM, SOLID</li>
                    <li>Hands-on Project: Designing and developing a basic CRM system interface</li>
                </Ul>

                <Ul title="Module 7" value="Validations & Form Handling">
                    <li>Implementing client-side validation using JavaScript and React</li>
                    <li>Using libraries like Yup and React Hook Form for form validation</li>
                    <li>Handling complex form validations in large applications</li>
                    <li>Error handling and user-friendly feedback mechanisms</li>
                    <li>Hands-on Project: Creating a form validation system in React</li>
                </Ul>

                <Ul title="Module 8" value="Ant Design (AntD) & Material Tailwind">
                    <li>Introduction to Ant Design and Material Tailwind: UI components and styling</li>
                    <li>Customizing Ant Design components like Buttons, Inputs, Modals</li>
                    <li>Building forms, tables, and layouts with Ant Design</li>
                    <li>Hands-on Project: Building an interactive user interface with Ant Design and Material Tailwind</li>
                </Ul>

                <Ul title="Module 9" value="DataTable Integration">
                    <li>Introduction to DataTable components in React</li>
                    <li>Implementing features like sorting, pagination, and filtering</li>
                    <li>Integrating API data into a DataTable</li>
                    <li>Hands-on Project: Displaying data dynamically in a DataTable with React</li>
                </Ul>

                <Ul title="Module 10" value="ApexCharts">
                    <li>Introduction to ApexCharts: Creating interactive charts and visualizations</li>
                    <li>Customizing charts and integrating them with React</li>
                    <li>Handling large datasets in charts for performance optimization</li>
                    <li>Hands-on Project: Building dynamic dashboards with ApexCharts</li>
                </Ul>

                <Ul title="Module 11" value="SCSS (SASS)">
                    <li>Introduction to SCSS for advanced styling</li>
                    <li>Nesting, Variables, Mixins, Functions, and Partials</li>
                    <li>Organizing large stylesheets with SCSS</li>
                    <li>Hands-on Project: Styling a website with SCSS for better maintainability</li>
                </Ul>

                <Ul title="Module 12" value="React-PDF">
                    <li>Working with PDF files in React applications</li>
                    <li>Using React-PDF to display and render PDF files within your app</li>
                    <li>Extracting and manipulating data from PDF documents</li>
                    <li>Hands-on Project: Building a PDF viewer in React using React-PDF</li>
                </Ul>

                <div>
                    <Heading>Training Methodology</Heading>
                    <P>Our training methodology is focused on <B>hands-on learning,</B> real-world problem-solving, and continuous feedback to ensure the best results for each participant. Each module will involve:</P>
                    <div className="space-y-3 my-3 pl-2">
                        <Point point={1} title="Practical Exercises">
                            Throughout the course, you will be engaged in practical coding exercises designed to reinforce concepts. These exercises allow you to apply the knowledge you've gained in real-time, helping you develop critical thinking and problem-solving skills.
                        </Point>

                        <Point point={2} title="Industry Projects">
                            The program includes live industry projects that simulate real-world scenarios. You will work on building applications and solutions that are relevant to the frontend development industry. This hands-on experience will make you job-ready and confident in handling professional projects.
                        </Point>

                        <Point point={3} title="Mentorship & Guidance">
                            Our expert instructors provide personalized mentorship and guidance throughout the course. You will have the opportunity to interact with them for project reviews, doubt resolution, and advice on best practices. This direct guidance will help you learn more effectively and advance your skills.
                        </Point>
                    </div>
                </div>

                <div>
                    <Heading>Certification</Heading>
                    <P>
                        At the end of the <B>Frontend Development Industrial Training</B> program, students will receive a <B>Certificate of Completion</B> from <B>Koncept Software Solutions.</B> This certificate will be a testament to your acquired skills and your readiness to work in the dynamic field of frontend development.
                    </P>
                </div>

                <div>
                    <Heading>Why Choose Koncept Software Solutions?</Heading>
                    <div className="my-2 space-y-2">
                        <Li title="Experienced Trainers">Our trainers are industry professionals with years of experience working on real-world projects.</Li>
                        <Li title="Comprehensive Curriculum">The course covers all essential frontend technologies, libraries, and frameworks needed to succeed.</Li>
                        <Li title="Affordable">At ₹5000/- per month, this course provides a cost-effective way to build a strong foundation in frontend development.</Li>
                        <Li title="Job Placement Assistance">We assist students with job placements after the course, helping them land roles as frontend developers or related positions.</Li>
                        <Li title="Practical Approach">Students gain hands-on experience through live projects, ensuring they are ready for industry challenges.</Li>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Course;