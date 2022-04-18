import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedbackData";
import ConfirmationWindow from "./components/ConfirmationWindow";
import ReviewBox from "./components/ReviewBox";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);
  const [confirm, setConfirm] = useState({ show: false, id: null });
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [rating, setRating] = useState(10);
  let sum = 0;
  feedback.forEach((item) => {
    sum += item.rating;
  });
  const averageRating =
    feedback.length === 0 ? 0 : (sum / feedback.length).toFixed();
  const handleDelete = (id) => {
    setConfirm({ show: true, id: id });
  };
  const handleConfirmDelete = () => {
    const filterFeedbacks = feedback.filter((item) => item.id !== confirm.id);
    setFeedback(filterFeedbacks);
    setConfirm({ show: false, id: null });
  };
  const handleCancel = () => {
    setConfirm({ show: false, id: null });
  };
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const sendInput = (e) => {
    setInput(e.target.value);
  };
  const sendRating = (receivedRating) => {
    setRating(receivedRating);
  };
  const submitInput = () => {
    setFeedback([
      { id: Math.random(), rating: rating, text: input },
      ...feedback,
    ]);
    setInput("");
  };
  return (
    <div className={`mainWrapper bg-background ${theme} min-h-screen`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <ReviewBox
        sendInput={sendInput}
        submitInput={submitInput}
        sendRating={sendRating}
        currentRating={rating}
        inputValue={input}
      />
      {confirm.show && (
        <ConfirmationWindow
          handleConfirmDelete={handleConfirmDelete}
          handleCancel={handleCancel}
        />
      )}
      <FeedbackList
        feedback={feedback}
        handleDelete={handleDelete}
        averageRating={averageRating}
      />
    </div>
  );
}

export default App;
