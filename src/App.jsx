import React from "react";

export default function App() {
  const user = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 2,
      id: 2,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 6,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 31,
      id: 4,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      userId: 12,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 85,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
  ];
  const userUzd = user.map((answer) => {
    return <input type="radio" name="myRadio" value={answer.id} /> <label for={answer.id}></label>;
  });
  return (
    <>
      <label>{userUzd}</label>
    </>
  );
}
