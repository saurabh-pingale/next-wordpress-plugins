import useRatingPopup from "./useRatingPopup";

function BookingPage() {
    const { showPopup, RatingPopup } = useRatingPopup();

    return (
        <div style={{ padding: "20px" }}>
            <h1>Book Your Ticket</h1>
            <button
                onClick={showPopup}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                }}
            >
                Book Ticket
            </button>
            <RatingPopup />
        </div>
    )
}

export default BookingPage;