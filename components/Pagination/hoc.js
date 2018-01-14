import { withState, withHandlers, compose } from 'recompose';
import range from 'lodash/range';

export default (Pagination) => compose(
  withState('pages', 'updatePages', range(1, 38)),
  withState('activePage', 'updateActivePage', 1),
  withHandlers({
    onPageChange: ({ updateActivePage }) => page => updateActivePage(page),
  }),
)(Pagination);
