// import React, { useState, useEffect } from "react";
// import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

// interface Cigar {
//     name: string;
//     price: number;
//     taste: number;
// }

// export const AddCigar: React.FC = () => {
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const [newCigar, setNewCigar] = useState<Cigar>({ name: "", price: 0, taste: 5 });
//     const [cigars, setCigars] = useState<Cigar[]>([]);

//     useEffect(() => {
//         const storedCigars = localStorage.getItem("cigars");
//         if (storedCigars) {
//             setCigars(JSON.parse(storedCigars));
//         }
//     }, []);

//     const handleAddCigar = () => {
//         const updatedCigars = [...cigars, newCigar];
//         setCigars(updatedCigars);
//         localStorage.setItem("cigars", JSON.stringify(updatedCigars));
//         setNewCigar({ name: "", price: 0, taste: 5 });
//         setIsDialogOpen(false);
//     };

//     return (
//         <div className="mb-8">
//             <button
//                 onClick={() => setIsDialogOpen(true)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//                 Add New Cigar
//             </button>

//             <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//                 <DialogContent>
//                     <DialogHeader>
//                         <DialogTitle>Add a New Cigar</DialogTitle>
//                     </DialogHeader>
//                     <div className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium">Name</label>
//                             <input
//                                 type="text"
//                                 value={newCigar.name}
//                                 onChange={(e) => setNewCigar({ ...newCigar, name: e.target.value })}
//                                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//                                 placeholder="Cigar name"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium">Price</label>
//                             <input
//                                 type="number"
//                                 value={newCigar.price}
//                                 onChange={(e) => setNewCigar({ ...newCigar, price: parseFloat(e.target.value) })}
//                                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//                                 placeholder="Price"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium">Taste</label>
//                             <input
//                                 type="number"
//                                 min={1}
//                                 max={10}
//                                 value={newCigar.taste}
//                                 onChange={(e) => setNewCigar({ ...newCigar, taste: parseInt(e.target.value, 10) })}
//                                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
//                                 placeholder="Taste rating (1-10)"
//                             />
//                         </div>
//                     </div>
//                     <DialogFooter>
//                         <button
//                             onClick={handleAddCigar}
//                             className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
//                         >
//                             Save
//                         </button>
//                     </DialogFooter>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";

interface Cigar {
    name: string;
    price: number;
    taste: number;
}

interface AddCigarProps {
    cigars: Cigar[];
    setCigars: React.Dispatch<React.SetStateAction<Cigar[]>>;
}

export const AddCigar: React.FC<AddCigarProps> = ({ cigars, setCigars }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newCigar, setNewCigar] = useState<Cigar>({ name: "", price: 0, taste: 0 });

    const handleAddCigar = () => {
        const updatedCigars = [...cigars, newCigar];
        setCigars(updatedCigars); // Update shared state
        setNewCigar({ name: "", price: 0, taste: 0 });
        setIsDialogOpen(false);
    };

    return (
        <div className="mb-8">
            <button
                onClick={() => setIsDialogOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
                Add New Cigar
            </button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add a New Cigar</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={newCigar.name}
                                onChange={(e) => setNewCigar({ ...newCigar, name: e.target.value })}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Cigar name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Price</label>
                            <input
                                type="number"
                                value={newCigar.price}
                                onChange={(e) => setNewCigar({ ...newCigar, price: parseFloat(e.target.value) })}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Price"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Taste</label>
                            <input
                                type="number"
                                min={1}
                                max={10}
                                value={newCigar.taste}
                                onChange={(e) => setNewCigar({ ...newCigar, taste: parseInt(e.target.value, 10) })}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Taste rating (1-10)"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <button
                            onClick={handleAddCigar}
                            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                        >
                            Save
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
