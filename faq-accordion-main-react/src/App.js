import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    text: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Accordion />
    </div>
  );
}

function Header() {
  return <div className="header"></div>;
}

function Accordion() {
  return (
    <div className="Accordion">
      <Heading />
      <AccordionItems />
    </div>
  );
}

function Heading() {
  return (
    <div className="heading">
      <img src="images/icon-star.svg" alt="icon" />
      <h1>FAQs</h1>
    </div>
  );
}

function AccordionItems() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <ul>
      {faqs.map((faq, i) => (
        <Item
          faq={faq}
          key={faq.title}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
          id={i + 1}
        />
      ))}
    </ul>
  );
}

function Item({ faq, id, curOpen, setCurOpen }) {
  const isOpen = id === curOpen;

  function handleSetOpen(id) {
    setCurOpen(isOpen ? null : id);
  }

  return (
    <li onClick={() => handleSetOpen(id)}>
      <div className="title">
        <h3>{faq.title}</h3>
        <img
          src={isOpen ? "images/icon-minus.svg" : "images/icon-plus.svg"}
          alt="icon"
        />
      </div>
      {isOpen && <p>{faq.text}</p>}
    </li>
  );
}
