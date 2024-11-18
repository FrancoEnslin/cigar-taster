import { Button } from "@/components/ui/button";

export const CigarCard = ({ cigar }: { cigar: { id: number; name: string; origin: string } }) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{cigar.name}</h3>
            <p className="text-gray-600">Origin: {cigar.origin}</p>
            <Button variant="default" className="mt-4">
                Rate Cigar
            </Button>
        </div>
    );
};
