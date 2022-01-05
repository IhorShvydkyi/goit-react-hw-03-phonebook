import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { FilterStyled, Label, Input } from "./Filter.styled";

function Filter({ onChange, value }) {
  const filterInputId = uuidv4();
  return (
    <FilterStyled>
      <Label htmlFor={filterInputId}>Find contact by the name</Label>
      <Input
        type="text"
        name="filter"
        value={value}
        id={filterInputId}
        onChange={onChange}
      />
    </FilterStyled>
  );
}

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
