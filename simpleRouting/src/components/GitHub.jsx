import { useLoaderData } from "react-router-dom";
export default function GitHub() {
  let data = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        height: "85lvh",
      }}
    >
      
      <h2>Github followers : {data.followers}</h2>
      <img
        src={data.avatar_url}
        alt=""
        width="100px"
        height="100px"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
export async function load(){
  let data = await fetch("https://api.github.com/users/jeet-sehgal").then(res=>res.json());
  return data;
};
