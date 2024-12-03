import { useState } from "react";

function Component() {
  type Link = {
    id: number;
    text: string;
    url: string;
  };

  const navLinks: Link[] = [
    {
      id: 1,
      url: "some url",
      text: "some text",
    },
    {
      id: 1,
      url: "some url",
      text: "some text",
    },
    {
      id: 2,
      url: "some url",
      text: "some text",
    },
    {
      id: 3,
      url: "some url",
      text: "some text",
    },
  ];

  const [list, setList] = useState<(number | string)[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          setList(["hello", "world", "bibash"]);
          setList([1, 2, "hoihso"]);
          setLinks([...links, { id: 4, url: "hello", text: "yahoo!" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
