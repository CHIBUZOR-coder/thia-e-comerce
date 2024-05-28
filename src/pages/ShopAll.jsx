// import { useParams } from "react-router-dom";
// import useFetch from "./home/Usefetch";
// const ShowAll = () => {
//   const { id } = useParams();

//   const {
//     data: item,
//     isPending,
//     error,
//   } = useFetch(`http://localhost:8000/Ankara/${id}`);
//   return (
//     <div>
//       {isPending && <div>Loaing...</div>}
//       {error && <div>{error}</div>}
//       <div>
//         {item && (
//           <div>
//             {item.title}, {item.id}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShowAll;

import { useParams } from "react-router-dom";
import useFetch from "./home/Usefetch";
import { AnkaraItems } from "./home/ShopCategory/Data";


const ShowAll = () => {
  const Items = AnkaraItems();
  const { id } = useParams();
    const item = Items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }


 
  return (
    <div>
      <h1>{item.title}</h1>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <p>Status: {item.status}</p>
      <img src={`../images/${item.image}.jpg`} alt={item.title} />
    </div>
  );
};


export default ShowAll;
