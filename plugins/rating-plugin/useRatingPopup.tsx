import { useState } from "react";
import RatingPopup from "./RatingPopup";

function useRatingPopup() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const showPopup = () => setIsPopupVisible(true);
    const hidePopup = () => setIsPopupVisible(false);

    const handleRate = (rating: number) => {
        console.log("User rated:", rating);
        hidePopup();
    };

    return {
        isPopupVisible,
        showPopup,
        hidePopup,
        handleRate,
        RatingPopup: () => 
            isPopupVisible ? (
                <RatingPopup onClose={hidePopup} onRate={handleRate} />
            ) : null,
    };
}

export default useRatingPopup;