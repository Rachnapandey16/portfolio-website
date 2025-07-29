import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Shoppy E-commerce Website "
          main="Developed a modern and responsive eCommerce web application featuring product browsing, cart functionality, and secure user authentication. Implemented role-based access with JWT and bcrypt. Built an admin dashboard for managing products and users. Integrated Razorpay for secure and seamless online payments. Used technologies like Node.js, Express.js, MongoDB and Tailwind CSS to deliver a seamless shopping experience."
        />
        <ProjectCard
          title="Online Food Delivery Website"
          main="The objective of this project is to design a responsive and user-friendly online food delivery website using frontend technologies. It allows users to browse restaurants, view menus, add items to a cart, and simulate a checkout process."
        />
        <ProjectCard
          title="Todo List"
          main="The objective of this project is to build a fully interactive and responsive To‑Do List web application using React.js. Designed to help users manage daily tasks efficiently, the app enables adding, editing, deleting, and marking tasks as completed, with updates reflected instantly in the interface. Leveraging React’s component architecture and state handling, the interface remains clean and dynamic"
        />
      </div>
    </div>
  );
};

export default Projects;
