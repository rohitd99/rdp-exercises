const generateElements = (textColor) =>{
    

    const addElement = (tag,text) =>
    {
        const newElement = document.createElement(tag);
        const textNode = document.createTextNode(text);
        
        newElement.appendChild(textNode);
        newElement.style.color = textColor;

        document.body.appendChild(newElement);

    }
    return addElement;
}

const redAddElement = generateElements("red"); 
const blueAddElement = generateElements("blue");

redAddElement("div","Hello World");
redAddElement("span","Hello Span");
blueAddElement("h1","Hello All");
