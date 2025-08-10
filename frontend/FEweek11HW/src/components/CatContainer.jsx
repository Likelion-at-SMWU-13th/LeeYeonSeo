import CatCard from "./CatCard.jsx";
const CatContainer = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <CatCard />
      </div>
    </div>
  );
};

export default CatContainer;
