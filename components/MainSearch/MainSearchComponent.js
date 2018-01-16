import React, { PropTypes } from 'react';
import * as MainSearchStyled from 'template/components/MainSearch/MainSearchStyled';
import throttle from 'lodash/throttle';

let typingTimer;
const doneTypingInterval = 750;

class MainSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getProductSuggestRequest = throttle(this.props.getProductSuggestRequest, 300);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.onMainSearchChange = this.onMainSearchChange.bind(this);
    this.handleRequestTimer = this.handleRequestTimer.bind(this);
    this.state = { search: '' };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.productMakeModel !== this.props.productMakeModel) {
      this.setState({ search: nextProps.productMakeModel });
    }

    if (
      nextState.search !== this.state.search &&
      nextState.search.length &&
      nextState.search !== nextProps.productMakeModel
    ) {
      this.handleRequestTimer(nextState.search);
    }

    if (!nextState.search.length) {
      this.props.getProductSuggestRequest.bind(null, '', true);
    }
  }

  onMainSearchChange(event) {
    this.props.idleProductSearch();
    this.setState({ search: event.target.value });
  }

  handleRequestTimer(search) {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(
      () => this.getProductSuggestRequest({ search, onComplete: this.focusTextInput }),
      doneTypingInterval);
  };

  focusTextInput() {
    // Explicitly focus the text input
    this.textInput.focus();
  }

  render() {
    return (
      <MainSearchStyled.Block>
        <MainSearchStyled.Component isSuggestVisible={this.props.isSuggestVisible}>
          <MainSearchStyled.Search>
            <input
              type="text"
              placeholder="Search for make or model"
              value={this.state.search}
              onChange={this.onMainSearchChange}
              ref={(input) => {
                this.textInput = input;
              }}
            />
          </MainSearchStyled.Search>
          <MainSearchStyled.Button
            onClick={() => this.props.submitProductSearch()}
            isDisabled={!this.props.productMakeModel || !this.props.productsSearch.isSearchable}
            disabled={!this.props.productMakeModel || !this.props.productsSearch.isSearchable}
          >
            Search &nbsp; <i className="fa fa-search"/>
          </MainSearchStyled.Button>
        </MainSearchStyled.Component>
      </MainSearchStyled.Block>
    );
  }
}

MainSearchComponent.propTypes = {
  productMakeModel: PropTypes.string.isRequired,
  getProductSuggestRequest: PropTypes.func.isRequired,
  isSuggestVisible: PropTypes.bool.isRequired,
  productsSearch: PropTypes.shape({}).isRequired,
  idleProductSearch: PropTypes.func.isRequired,
  submitProductSearch: PropTypes.func.isRequired,
};

export default MainSearchComponent;
