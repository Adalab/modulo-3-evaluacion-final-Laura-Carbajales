const FilterAlive = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'alive',
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <div>
        <label htmlFor='alive' className='labelName'>
          <input
            id='alive'
            type='radio'
            value='alive'
            name='filterAlive'
            onChange={handleChange}
            checked={props.filterAlive === 'alive'}
          />
          Vivo
        </label>
      </div>
      <div>
        <label htmlFor='died' className='labelName'>
          <input
            id='died'
            type='radio'
            value='died'
            name='filterAlive'
            onChange={handleChange}
            checked={props.filterAlive === 'died'}
          />
          Muerto
        </label>
      </div>
    </>
  );
};
export default FilterAlive;
