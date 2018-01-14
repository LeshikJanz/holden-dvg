import React, { PropTypes } from 'react';
import * as PaginationStyled from 'template/components/Pagination/PaginationStyled';
import hoc from 'template/components/Pagination/hoc';
import map from 'lodash/map';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(item) {
    this.props.onChange({ limit: this.props.defaultLimit, offset: this.props.defaultLimit * (item - 1) });
    this.props.onPageChange(item);
  }

  render() {
    return (
      <PaginationStyled.Component>
        <PaginationStyled.Pagination>
          {map(this.props.pages, item => (
            <PaginationStyled.PaginationItem
              key={item}
              isActive={item === this.props.activePage}
              onClick={this.onPageChange.bind(null, item)}
            >{item}</PaginationStyled.PaginationItem>
          ))}
        </PaginationStyled.Pagination>
      </PaginationStyled.Component>
    );
  }
}

Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultLimit: PropTypes.number.isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  activePage: PropTypes.number.isRequired,
};

export default hoc(Pagination);
