import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-blue-800 font-medium text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] p-2.5 mt-[20px]"
            name="text"
            id="text"
            value={text}
            placeholder="Enter Goal"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            className="bg-blue-500 btn-block hover:bg-blue-400 text-white font-bold py-4 px-10 border-b-4 border-blue-700 hover:border-blue-500 rounded  mt-[20px]"
            type="submit"
          >
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
