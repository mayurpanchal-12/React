import usenew from "./new";

function New() {
  const { cur } = usenew("inr"); // ✅ called like a function, not <usenew/>
  console.log(cur);

  return <h1>hello</h1>;
}

export default New;
