import '../styles/components/FilterAncestry.scss';

const FilterAncestry = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      key: 'ancestry',
      value: ev.target.value,
    });
  };
  const translateAncestry = (ancestry) => {
    switch (ancestry) {
      case 'half-blood':
        ancestry = 'Sangre Mixta';
        break;
      case 'muggleborn':
        ancestry = 'Sangre Sucia';
        break;
      case 'pure-blood':
        ancestry = 'Sangre Pura';
        break;
      case '':
        ancestry = null;
        break;
      default:
        ancestry = null;
    }
    return ancestry;
  };
  const renderAncestry = () => {
    return props.ancestry.map((ancestry, index) => {
      const resultAncestry = translateAncestry(ancestry);

      if (resultAncestry !== null) {
        return (
          <li className='labelAncestry__list--item' key={index}>
            <label className='labelInput'>
              <input
                className='input'
                type='checkbox'
                name='ancestry'
                value={ancestry}
                checked={props.filterAncestry.includes(ancestry)}
                onChange={handleChange}
              />
              {translateAncestry(ancestry)}
            </label>
          </li>
        );
      }

      return null;
    });
  };

  return (
    <>
      <div className='containerAncestry'>
        <label className='labelAncestry' htmlFor='ancestry'>
          Filtrar por ancestros:
        </label>
        <ul className='labelAncestry__list'>{renderAncestry()}</ul>
      </div>
    </>
  );
};
export default FilterAncestry;
