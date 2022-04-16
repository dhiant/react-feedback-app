import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackData from "./data/FeedbackData";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);
  const [theme, setTheme] = useState("dark"); 
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  let sum = 0;
  feedback.forEach((item) => {
    sum += item.rating;
  });
  const averageRating = feedback.length === 0 ? 0 : sum / feedback.length;
  return (
    <div className={`mainWrapper bg-background ${theme} min-h-screen`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <div className="md:ml-4 text-center font-serif font-bold bg-rating w-[230px] border-primaryText border-[20px] xl:w-96 flex align-middle justify-center flex-col">
        <h1 className="md:text-2xl text-lg text-primaryText mt-2 rounded-md">
          {feedback.length} Reviews
        </h1>
        <h1 className="md:text-2xl text-lg text-primaryText pb-1 rounded-md">
          Average-Rating : {averageRating}
        </h1>
      </div>
      <FeedbackList feedback={feedback} />
    </div>
  );
}

export default App;
