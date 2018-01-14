import { withState, withHandlers, compose } from 'recompose';

export default (ProductOverview) => compose(
  withState('modal', 'updateModal', () => false),
  withHandlers({
    onModalToggle: ({ modal, updateModal }) => () => updateModal(!modal),
    onModalClose: ({ updateModal }) => () => updateModal(false)
  })
)(ProductOverview);
