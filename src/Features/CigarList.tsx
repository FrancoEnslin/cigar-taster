// // import { CigarCard } from "./CigarCard";

// // const cigars = [
// //     { id: 1, name: "Cohiba", origin: "Cuba" },
// //     { id: 2, name: "Montecristo", origin: "Cuba" },
// //     { id: 3, name: "Davidoff", origin: "Dominican Republic" },
// // ];

// // export const CigarList = () => {
// //     return (
// //         <div className="container mx-auto py-8">
// //             <h2 className="text-2xl font-bold mb-6">Cigar Collection</h2>
// //             <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
// //                 {cigars.map((cigar) => (
// //                     <CigarCard key={cigar.id} cigar={cigar} />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// import React, { useEffect, useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// interface Cigar {
//   name: string;
//   price: number;
//   taste: number;
// }

// export const CigarList: React.FC = () => {
//   const [cigars, setCigars] = useState<Cigar[]>([]);

//   useEffect(() => {
//     const storedCigars = localStorage.getItem("cigars");
//     if (storedCigars) {
//       setCigars(JSON.parse(storedCigars));
//     }
//   }, []);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {cigars.map((cigar, index) => (
//         <Card key={index} className="shadow-md">
//           <CardHeader>
//             <CardTitle>{cigar.name}</CardTitle>
//             <CardDescription>Price: ${cigar.price.toFixed(2)}</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <p>Taste Rating: {cigar.taste}/10</p>
//             <Badge className="mt-2">{cigar.taste >= 8 ? "Excellent" : cigar.taste >= 5 ? "Good" : "Average"}</Badge>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Cigar {
    name: string;
    price: number;
    taste: number;
}

interface CigarListProps {
    cigars: Cigar[];
}

export const CigarList: React.FC<CigarListProps> = ({ cigars }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cigars.map((cigar, index) => (
                <Card key={index} className="shadow-md">
                    <CardHeader>
                        <CardTitle>{cigar.name}</CardTitle>
                        <CardDescription>Price: ${cigar.price.toFixed(2)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Taste Rating: {cigar.taste}/10</p>
                        <Badge className="mt-2">{cigar.taste >= 8 ? "Excellent" : cigar.taste >= 5 ? "Good" : "Average"}</Badge>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};
