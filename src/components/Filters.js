import '../styles/components/Filters.scss';
import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

const Filters = (props) => {
  return (
    <section>
      <form>
        <FilterName handleFilter={props.handleFilter} filterName={props.filterName} />
        <FilterHouse />
      </form>
    </section>
  );
};
export default Filters;
