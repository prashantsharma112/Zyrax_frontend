

import { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ Import useNavigate
import { toast } from "react-hot-toast";
import { Star } from "lucide-react";
import Button from "../components/subComponents/Button";

const RatingForm = () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;   // ✅ Base URL from env
  const navigate = useNavigate();   // ✅ Initialize navigate function

  const [score, setScore] = useState(0);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();   // Prevent form refresh

    const token = localStorage.getItem("accessToken");  // ✅ Get token from localStorage

    if (!token) {
      toast.error("You must be logged in to submit a rating.");
      return;
    }

    if (score < 1 || score > 5) {
      toast.error("Please select a rating between 1 and 5.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${baseUrl}/ratings/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ score, description }),
      });

      if (!response.ok) {
        throw new Error(`Failed: ${response.status}`);
      }

      const result = await response.json();

      toast.success("Rating submitted successfully!");

      // ✅ Clear form fields
      setScore(0);
      setDescription("");

      // ✅ Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate("/");   // ✅ Redirect to home page
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting rating:", error);
      toast.error(`Failed to submit rating: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-black shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Rate Us</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <Star
              key={num}
              size={32}
              className={`cursor-pointer ${
                score >= num ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setScore(num)}
            />
          ))}
        </div>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description (optional)"
          rows="4"
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <Button
          type="submit"
          className="w-full mt-4 py-2 duration-300"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Rating"}
        </Button>
      </form>
    </div>
  );
};

export default RatingForm;
