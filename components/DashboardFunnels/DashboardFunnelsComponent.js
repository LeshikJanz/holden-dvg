import React, { PropTypes } from 'react';
import InputText from 'template/components/InputText/InputTextComponent';
import * as DashboardFunnelsStyled from 'template/components/DashboardFunnels/DashboardFunnelsStyled';
import * as TableStyled from 'template/components/Table/TableStyled';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
import { Link } from 'react-router-dom';

class DashboardFunnelsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getFunnelPagesRequest = debounce(this.props.getFunnelPagesRequest.bind(this), 300);
    this.onFunnelSearch = this.onFunnelSearch.bind(this);
  }

  componentWillMount() {
    this.props.getFunnelPagesRequest({});
  }

  componentWillUnmount() {
    this.props.getFunnelPagesIdle();
  }

  onFunnelSearch({ name }) {
    this.getFunnelPagesRequest({ name });
  }

  render() {
    return (
      <DashboardFunnelsStyled.Component>
        <DashboardFunnelsStyled.Heading>Funnel pages</DashboardFunnelsStyled.Heading>

        <DashboardFunnelsStyled.Search>
          <InputText>
            <input type="text" placeholder="Search Marketing Funnel Pages" />
          </InputText>
        </DashboardFunnelsStyled.Search>

        <TableStyled.Table>
          <TableStyled.TableHeader>
            <TableStyled.TableRow header>
              <TableStyled.TableCol>Campaign Name</TableStyled.TableCol>
              <TableStyled.TableCol>Page Name</TableStyled.TableCol>
              <TableStyled.TableCol>Page URI</TableStyled.TableCol>
              <TableStyled.TableCol />
            </TableStyled.TableRow>
          </TableStyled.TableHeader>

          <TableStyled.TableBody>
            {map(this.props.funnelPages.data, (item, key) => (
              <TableStyled.TableRow key={key}>
                <TableStyled.TableCol>{item.campaignName}</TableStyled.TableCol>
                <TableStyled.TableCol>{item.pageName}</TableStyled.TableCol>
                <TableStyled.TableCol>
                  <Link to={{ pathname: '/products', query: { funnel: item._id } }}>{item.url}</Link>
                </TableStyled.TableCol>
                <TableStyled.TableCol>
                  <ButtonComponent size="small">Edit</ButtonComponent>
                  <ButtonComponent size="small">Delete</ButtonComponent>
                </TableStyled.TableCol>
              </TableStyled.TableRow>
            ))}
          </TableStyled.TableBody>
        </TableStyled.Table>
      </DashboardFunnelsStyled.Component>
    );
  }
}

DashboardFunnelsComponent.propTypes = {
  funnelPages: PropTypes.shape().isRequired,
  getFunnelPagesRequest: PropTypes.func.isRequired,
  getFunnelPagesIdle: PropTypes.func.isRequired,
};

export default DashboardFunnelsComponent;
