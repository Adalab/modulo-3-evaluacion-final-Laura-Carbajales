const FilterName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'name',
      value: ev.currentTarget.value,
    });
  };
  return (
    <>
      <label className='' htmlFor='name'>
        Filtrar por nombre:
      </label>
      <input
        className=''
        type='text'
        name='name'
        id='name'
        value={props.filterName}
        onChange={handleChange}
      ></input>
    </>
  );
};
export default FilterName;
