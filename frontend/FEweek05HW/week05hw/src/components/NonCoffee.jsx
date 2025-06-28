import { useEffect, useState } from "react";
import axios from "axios";

const NonCoffee = () => {
  const [nonCoffees, setNonCoffees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/nonCoffees")
      .then((res) => {
        const nonCoffeeMenu = res.data;
        setNonCoffees(nonCoffeeMenu);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);
  return (
    <div>
      <h2>Non-Coffee Menu</h2>
      <div>
        {nonCoffees.map((nonCoffee) => (
          <div key={nonCoffee.id}>
            <h3>{nonCoffee.menu}</h3>
            <img src={nonCoffee.image} alt={nonCoffee.menu} />
            <p>칼로리: {nonCoffee.calorie}</p>
            <p>당류: {nonCoffee.sugar}</p>
            <p>단백질: {nonCoffee.protein}</p>
            <p>포화지방: {nonCoffee.fat}</p>
            <p>나트륨: {nonCoffee.natrium}</p>
            <p>카페인: {nonCoffee.caffeine}</p>
            <p>{nonCoffee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonCoffee;
