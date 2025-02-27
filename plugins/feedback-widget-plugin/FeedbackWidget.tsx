import { useState } from "react";

function FeedbackWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitFeedback(feedback);
        resetFeedback();
    };

    const submitFeedback = (feedback: string) => {
        alert("Thank you for your feedback!");
    };

    const resetFeedback = () => {
        setFeedback("");
        setIsOpen(false);
    };

    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
            {isOpen ? (
                <div className="bg-white p-4 rounded shadow" style={{ width: "300px" }}>
                    <h3>Feedback</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="Your feedback..."
                                rows={4}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="btn btn-primary rounded-circle shadow"
                    style={{ width: "50px", height: "50px" }}
                >
                    💬
                </button>
            )}
        </div>
    );
}

export default FeedbackWidget;
