import { useRecoilState } from "recoil";
import { ColorsAtom } from "../cart/atoms/ColorsAtoms";

export const Assignment2 = () => {
  const [colors, setColors] = useRecoilState(ColorsAtom);
  console.log(colors);
  return (
      <div style={{ backgroundColor: colors, height: "100vh" }}>
        <div style={{ display: "flex",position:"fixed",bottom : "0px", flexDirection: "row",gap: "1rem" }}>
        <button type="button" onClick={()=>setColors("#89CFF0")}>Blue</button>
        <button type="button" onClick={()=>setColors("#FF00FF")}>Pink</button>
        <button type="button" onClick={()=>setColors("#FF0")}>Yellow</button>
        </div>
      </div>
  );
}; 
export default Assignment2;
