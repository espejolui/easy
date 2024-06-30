import "./Search.css";

export const Search = () => {
  const serchFood = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let target = event.target.value;
    console.log(target);
  };

  return (
    <form>
      <input onChange={serchFood} type="text" placeholder="Buscar receta..." />
    </form>
  );
};
