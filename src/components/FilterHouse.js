const FilterHouse = () => {
  return (
    <>
      <label className='' htmlFor='house'>
        Filtrar por casa:
      </label>
      <select className='' name='house' id='house'>
        <option value='gryffindor'>Gryffindor</option>
        <option value='hufflepuff'>Hufflepuff</option>
        <option value='ravenclaw'>Ravenclaw</option>
        <option value='slytherin'>Slytherin</option>
      </select>
    </>
  );
};
export default FilterHouse;
