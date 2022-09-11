// import ReactDOM from "react-dom/client";
// import Hook111 from "./Hook111";

// const Hook112 = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <>
//       {
//         data && data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };
// export default Hook112;