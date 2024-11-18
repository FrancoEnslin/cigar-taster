import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export const RatingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [rating, setRating] = useState<number>(3);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Rate the Cigar</DialogTitle>
                </DialogHeader>
                <div>
                    <label className="block text-sm font-medium">Flavor:</label>
                    <Slider
                        value={[rating]}
                        onValueChange={(value) => setRating(value[0])}
                        max={5}
                        step={1}
                    />
                    <p>Rating: {rating}/5</p>
                </div>
                <DialogFooter>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="default" onClick={() => console.log("Submit rating:", rating)}>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
