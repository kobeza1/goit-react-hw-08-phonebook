import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const filterStore = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.currentTarget.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <p className={css.filter__title}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterStore}
        onChange={onChange}
      />
    </>
  );
};
