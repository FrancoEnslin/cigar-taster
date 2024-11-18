// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// import { Header } from "./Features/Header";
// import { CigarList } from "./Features/CigarList";
// import { Footer } from "./Features/Footer";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow">
//         <CigarList />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { Header } from "./Features/Header";
// import { CigarList } from "./Features/CigarList";
// import { Footer } from "./Features/Footer";
// import { AddCigar } from "./Features/AddCigar";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow flex flex-col items-center justify-center">
//         <AddCigar />
//         <CigarList />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
// import { Slider } from "@/components/ui/slider";

// interface Cigar {
//   name: string;
//   price: number;
//   taste: number;
// }

// const App: React.FC = () => {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [cigars, setCigars] = useState<Cigar[]>([]);
//   const [newCigar, setNewCigar] = useState<Cigar>({ name: "", price: 0, taste: 5 });

//   useEffect(() => {
//     // Load cigars from localStorage on initial render
//     const storedCigars = localStorage.getItem("cigars");
//     if (storedCigars) {
//       setCigars(JSON.parse(storedCigars));
//     }
//   }, []);

//   const handleAddCigar = () => {
//     const updatedCigars = [...cigars, newCigar];
//     setCigars(updatedCigars);
//     localStorage.setItem("cigars", JSON.stringify(updatedCigars));
//     setNewCigar({ name: "", price: 0, taste: 5 });
//     setIsDialogOpen(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="p-6 bg-white shadow-md rounded-md w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold mb-4">Cigar Taste Rating</h1>
//         <button
//           onClick={() => setIsDialogOpen(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//         >
//           Add New Cigar
//         </button>

//         <ul className="mt-6 space-y-4">
//           {cigars.map((cigar, index) => (
//             <li key={index} className="border p-4 rounded-md bg-gray-50">
//               <h2 className="font-bold">{cigar.name}</h2>
//               <p>Price: ${cigar.price.toFixed(2)}</p>
//               <p>Taste Rating: {cigar.taste}/10</p>
//             </li>
//           ))}
//         </ul>

//         {/* Dialog for adding new cigars */}
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add a New Cigar</DialogTitle>
//             </DialogHeader>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium">Name</label>
//                 <input
//                   type="text"
//                   value={newCigar.name}
//                   onChange={(e) => setNewCigar({ ...newCigar, name: e.target.value })}
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//                   placeholder="Cigar name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Price</label>
//                 <input
//                   type="number"
//                   value={newCigar.price}
//                   onChange={(e) => setNewCigar({ ...newCigar, price: parseFloat(e.target.value) })}
//                   className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//                   placeholder="Price"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium">Taste Rating: {newCigar.taste}/10</label>
//                 <Slider
//                   value={[newCigar.taste]}
//                   onValueChange={(value) => setNewCigar({ ...newCigar, taste: value[0] })}
//                   max={10}
//                   step={1}
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <button
//                 onClick={() => setIsDialogOpen(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddCigar}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//               >
//                 Add Cigar
//               </button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default App;



import { useState, useEffect } from "react";
import { Header } from "./Features/Header";
import { CigarList } from "./Features/CigarList";
import { Footer } from "./Features/Footer";
import { AddCigar } from "./Features/AddCigar";

interface Cigar {
  name: string;
  price: number;
  taste: number;
}

function App() {
  const [cigars, setCigars] = useState<Cigar[]>([]);

  // Load cigars from localStorage on app load
  useEffect(() => {
    const storedCigars = localStorage.getItem("cigars");
    if (storedCigars) {
      setCigars(JSON.parse(storedCigars));
    }
  }, []);

  // Update localStorage whenever cigars state changes
  useEffect(() => {
    localStorage.setItem("cigars", JSON.stringify(cigars));
  }, [cigars]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <AddCigar cigars={cigars} setCigars={setCigars} />
        <CigarList cigars={cigars} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
