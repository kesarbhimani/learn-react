import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1 className="font-mono text-blue-700">Welcome {user && user.name}</h1>
        <p className="font-mono text-xl text-blue-500">Goals Dashboard</p>
      </section>
      <GoalForm />
    </>
  );
}

export default Dashboard;
