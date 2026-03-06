import { useBio } from "../context";

const ContextHome = () => {
  const { name, age } = useBio();
  return (
    <div>
      My Name Is: {name} <br />
      My Age Is : {age}
    </div>
  );
};

export default ContextHome;
