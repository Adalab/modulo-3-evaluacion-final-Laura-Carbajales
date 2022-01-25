import '../styles/components/FilterHouse.scss';

const FilterHouse = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'house',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className='labelHouse' htmlFor='house'>
        Filtrar por casa:
      </label>
      <select
        className='inputHouse'
        name='house'
        id='house'
        value={props.filterHouse}
        onChange={handleChange}
      >
        <option value='gryffindor'>Gryffindor</option>
        <option value='hufflepuff'>Hufflepuff</option>
        <option value='ravenclaw'>Ravenclaw</option>
        <option value='slytherin'>Slytherin</option>
      </select>
    </>
  );
};
export default FilterHouse;
