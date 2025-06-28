import { useEffect, useState } from "react";
import axios from "axios";

const Coffee = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/coffees")
      .then((res) => {
        const coffeeMenu = res.data;
        setCoffees(coffeeMenu);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);
  return (
    <div>
      <h1>Hollys Coffee</h1>
      <h2>Coffee Menu</h2>
      <div>
        {coffees.map((coffee) => (
          <div key={coffee.id}>
            <div>
              <h3>{coffee.menu}</h3>
              <img src={coffee.image} alt={coffee.menu} />
              <p>칼로리: {coffee.calorie}</p>
              <p>당류: {coffee.sugar}</p>
              <p>단백질: {coffee.protein}</p>
              <p>포화지방: {coffee.fat}</p>
              <p>나트륨: {coffee.natrium}</p>
              <p>카페인: {coffee.caffeine}</p>
              <p>{coffee.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
