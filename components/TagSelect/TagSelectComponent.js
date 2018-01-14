import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'template/components/TagSelect/_TagSelectComponent.scss';
import TagSelectHoc from 'template/components/TagSelect/TagSelectHoc';
import { TagItemUnfoldedComponent } from 'template/components/TagItem/index';
import cx from 'classnames';
import map from 'lodash/map';
import filter from 'lodash/filter';
import isEmpty from 'lodash/isEmpty';

const filterTags = (all, selected) => {
  const selectedTypes = map(selected, item => item.key);
  return map(all, item => item[0])
  .filter(item => item && !selectedTypes.includes(item.key) && item.color !== 'asphalt');
};

class TagSelectComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const filters = filterTags(this.props.filtersMap, this.props.productsFilter);
    const componentStyle = cx({
      componentFolded: this.props.type === 'folded',
      componentUnfolded: this.props.type === 'unfolded',
    });

    return (
      <div styleName="block">
        <div styleName={componentStyle} style={{ position: 'relative' }}>
          {this.props.scrollRightIsVisible &&
            <div styleName="component-icon component-icon-left" onClick={this.props.scrollRight}>
              <div styleName="arrow-icon">
                <i className="fa fa-angle-left" />
              </div>
            </div>
          }
          <div styleName="component-list">
            <div styleName="tag">
              {map(filters, (item, key) =>
                <div styleName="tag-item" key={key}>
                  <TagItemUnfoldedComponent
                    toggleProductFilter={this.props.toggleProductFilter}
                    item={item}
                    title={item.title}
                    subtitle={`${item.count} cars`}
                    color={item.color}
                  />
                </div>
              )}
            </div>
          </div>
          {this.props.scrollLeftIsVisible &&
            <div styleName="component-icon" onClick={this.props.scrollLeft}>
              <div styleName="arrow-icon">
                <i className="fa fa-angle-right" />
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

TagSelectComponent.propTypes = {
  filtersMap: PropTypes.arrayOf(PropTypes.object).isRequired,
  productsFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['folded', 'unfolded']).isRequired,
  toggleProductFilter: PropTypes.func.isRequired,

  scrollLeftIsVisible: PropTypes.bool.isRequired,
  scrollRightIsVisible: PropTypes.bool.isRequired,
  scrollRight: PropTypes.func.isRequired,
  scrollLeft: PropTypes.func.isRequired,
};

export default TagSelectHoc(`.${styles.tag}`, css(TagSelectComponent, styles));
