// // import { useParams } from "react-router-dom";
// // import useFetch from "./home/Usefetch";
// // import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
// // const ShowAll = () => {
// //   const { id } = useParams();

// //   const {
// //     data: item,
// //     isPending,
// //     error,
// //   } = useFetch(`http://localhost:8000/Ankara/${id}`);
// //   return (
// //     <div>
// //       {isPending && <div>Loaing...</div>}
// //       {error && <div>{error}</div>}
// //       <div>
// //         {item && (
// //           <div className="md:px-28 px-4">
// //             <div className=" py-10 flex md:flex-row flex-col w-full gap-5">
// //               <div
// //                 className="h-[600px] w-full"
// //                 style={{
// //                   background: `url(../images/${item.image}.jpg) center center/ cover`,
// //                 }}
// //               ></div>
// //               <div className="md:pr-10">
// //                 <p className="text-3xl  font-semibold">{item.title}</p>
// //                 <p className="my-4">{item.Description}</p>
// //                 <div>
// //                   <span className=" flex items-center  gap-1  text-xl text-yellow-400">
// //                     <FaStar />
// //                     <FaStar />
// //                     <FaStar />
// //                     <FaStar />
// //                     <FaStar />
// //                   </span>
// //                   <p className="md:text-xl text-2xl  my-4 text-red-500 font-semibold">
// //                     ${item.price}
// //                   </p>

// //                   <div>
// //                     <div>
// //                       <label className=" mt-2 font-semibold" htmlFor="">
// //                         Quantity
// //                       </label>
// //                       <input
// //                         type="numer"
// //                         name="price"
// //                         id="price"
// //                         className="border defaultValue={1} required border-gray-300 font-semibold text-sm max-w-full w-full outline-none rounded-md my-2 py-3 px-4 focus:border-red-500"
// //                       />
// //                     </div>

// //                     <div className="my-4">
// //                       <button className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border-red-500 rounded-md transition ease-in-out duration-300 shadow-slate-600 hover:bg-red-100 hover:text-red-500 md:px-6">
// //                         <span className="flex justify-center items-center gap-2">
// //                           Confirm Order <FaArrowAltCircleRight />
// //                         </span>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShowAll;

// // import React from "react";
// // import { useParams } from "react-router-dom";
// // import PropTypes from "prop-types";

// // const Shop = ({ data }) => {
// //   const Items = data();
// //   const { id } = useParams();
// //   const item = Items.find((item) => item.id === parseInt(id));

// //   if (!item) {
// //     return <div>Item not found</div>;
// //   }

// //   return (
// //     <div className="md:px-28 px-4">
// //       {/* <h1>{item.title}</h1>
// //       <p>Category: {item.category}</p>
// //       <p>Price: ${item.price}</p>
// //       <p>Status: {item.status}</p>
// //       <img src={`../images/${item.image}.jpg`} alt={item.title} /> */}

// //       <div className="flex w-full">
// //         <div
// //           className="h-[400px] w-1/2"
// //           style={{
// //             background: `url(../images/${item.image}.jpg) center center/ cover`,
// //           }}
// //         ></div>
// //         <div><p>
// //           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam vel ratione atque eum iure placeat doloremque laborum et, quaerat ullam animi rem nam enim architecto quod perferendis numquam sed?</p></div>
// //       </div>
// //     </div>
// //   );
// // };

// // Shop.propTypes = {
// //   data: PropTypes.func.isRequired,
// // };

// // export default Shop;

// import React from "react";
// import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

// const Shop = ({ data }) => {
//   const { id } = useParams();
//   const item = data.find((item) => item.id === parseInt(id));

//   console.log("Shop component data:", data);
//   console.log("Shop component item:", item);

//   if (!item) {
//     return <div>Item not found</div>;
//   }

//   return (
//     <div className="md:px-28 px-4">
//       <div className="flex w-full">
//         <div
//           className="h-[400px] w-1/2"
//           style={{
//             background: `url(../images/${item.image}.jpg) center center/ cover`,
//           }}
//         ></div>
//         <div>
//           <h1>{item.title}</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quam
//             vel ratione atque eum iure placeat doloremque laborum et, quaerat
//             ullam animi rem nam enim architecto quod perferendis numquam sed?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// Shop.propTypes = {
//   data: PropTypes.array.isRequired,
// };

// export default Shop;
