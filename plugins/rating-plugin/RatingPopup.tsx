import { useState } from "react";
import ReactRating from "react-rating-stars-component";

interface RatingPopupProps {
    onClose: () => void;
    onRate: (rating: number) => void;
}

function RatingPopup({ onClose, onRate }: RatingPopupProps) {
    const [rating, setRating] = useState(0);

    const handleRate = (newRating: number) => {
        setRating(newRating);
    };

    const handleSubmit = () => {
        onRate(rating);
        onClose();
    };


    return (
        <div
            style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
                width: "300px",
                textAlign: "center",
            }}
        >
            <h3>Rate Your Experience</h3>
            <ReactRating
                count={5}
                value={rating}
                onChange={handleRate}
                size={40}
                activeColor="#ffd700"
            />
            <button
                onClick={handleSubmit}
                style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Submit Rating
            </button>
        </div>
    )
}

export default RatingPopup;