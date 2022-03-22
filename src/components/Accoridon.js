import { useState } from "react";

const list = [
  {
    header: "Lorem ipsum dolor sit ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum ante finibus, pellentesque sem non, interdum nisl. Suspendisse potenti. Nam sollicitudin nisi sit amet neque finibus vulputate nec quis neque."
  }
];

export const Accordion = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {list.map((item, index) => (
        <div key={index}>
          <h3
            id={index}
            onClick={() => setShow(!show)}
            style={{ cursor: "pointer" }}
          >
            {item.header}
          </h3>
          {show && <p>{item.content}</p>}
        </div>
      ))}
    </>
  );
};
