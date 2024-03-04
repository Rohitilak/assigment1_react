const h1 = React.createElement("h1", { id: "h2-root" }, "Learn web development");

const p1 = React.createElement('p', { id: "para1" }, "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

const div1 = React.createElement("div", {}, p1);
;
const a = React.createElement("a", { href: "#", target: "_blank"
}, "the rest of MDN");


const p2 = React.createElement('p', { className: "para2" }, "The aim of this area of MDN is not to take you from beginner to expert but to take you from beginner to comfortable. From there, you should be able to start making your way, learning from ", a, " and other intermediate to advanced resources that assume a lot of previous knowledge.");


const div2 = React.createElement("div", { className: "div2-root" }, p2);



const p3 = React.createElement('p', { className: "para3" }, "If you are a complete beginner, web development can be challenging we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");

const div3 = React.createElement("div", {}, p3);

const mainDiv = React.createElement("div", {style : {
  width: "45vw", border : "2px solid black", 
}}, h1, div1,div2,div3);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  React.createElement("div", {}, mainDiv)
);