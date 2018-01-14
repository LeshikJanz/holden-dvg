import React from 'react';
import PropTypes from 'prop-types';
import * as ProductFeaturesComponentStyled from 'template/components/ProductFeatures/ProductFeaturesComponentStyled';

class ProductFeaturesComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.toggleContent = this.toggleContent.bind(this);
  };

  toggleContent() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    const grouped = {};
    const groupedColumns = [{}, {}, {}];

    if (this.props.product.ComprehensiveFeatures) {
      this.props.product.ComprehensiveFeatures.forEach(({ FeatureGroup, FeatureName, Value }) => {
        if (grouped[FeatureGroup]) {
          grouped[FeatureGroup].push({ FeatureName, Value });
        } else {
          grouped[FeatureGroup] = [{ FeatureName, Value }];
        }
      });

      // @todo calculate size for each column for beauty view for any content
      Object.keys(grouped).forEach((FeatureGroup, index) => {
        groupedColumns[index % 3][FeatureGroup] = grouped[FeatureGroup];
      });
    }

    return (
      <div>
        {this.props.product.ComprehensiveFeatures &&
          <ProductFeaturesComponentStyled.Component>
            <ProductFeaturesComponentStyled.Header onClick={this.toggleContent}>
              <ProductFeaturesComponentStyled.Title>
                Features
              </ProductFeaturesComponentStyled.Title>
              <ProductFeaturesComponentStyled.Subtitle>
                {this.state.isVisible
                  ? <span>Hide all <i className="fa fa-chevron-up" aria-hidden="true" /></span>
                  : <span>Show all <i className="fa fa-chevron-down" aria-hidden="true" /></span>
                }
              </ProductFeaturesComponentStyled.Subtitle>
            </ProductFeaturesComponentStyled.Header>
            {this.state.isVisible &&
              <ProductFeaturesComponentStyled.Content>
                {groupedColumns.map((column, ci) =>
                  <ProductFeaturesComponentStyled.Column key={ci}>
                    {this.props.product.AncapRating && ci === 0 &&
                      <div>
                        <h3>Safety & Environment</h3>
                        <ProductFeaturesComponentStyled.Rating>
                          {[...Array(this.props.product.AncapRating)].map((value, index) =>
                            <fa key={index} className="fa fa-star" />
                          )}
                        </ProductFeaturesComponentStyled.Rating>
                        <ProductFeaturesComponentStyled.Help>
                          ? <span>ANCAP Rating</span>
                        </ProductFeaturesComponentStyled.Help>
                      </div>
                    }
                    {Object.keys(column).map((groupName, i) => (
                      <div key={i}>
                        <h3>{groupName}</h3>
                        {column[groupName].map(({ FeatureName, Value }) => (
                          <ProductFeaturesComponentStyled.Feature>
                            <strong>{FeatureName}: </strong>{Value}
                          </ProductFeaturesComponentStyled.Feature>
                        ))}
                      </div>
                    ))}
                  </ProductFeaturesComponentStyled.Column>
                )}
              </ProductFeaturesComponentStyled.Content>
            }
          </ProductFeaturesComponentStyled.Component>
        }
      </div>
    );
  }
}

ProductFeaturesComponent.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default ProductFeaturesComponent;
