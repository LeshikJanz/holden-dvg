import React, { PropTypes } from 'react';
import hoc from 'template/components/DashboardGroups/hoc';
import InputText from 'template/components/InputText/InputTextComponent';
import * as DashboardGroupsStyled from 'template/components/DashboardGroups/DashboardGroupsStyled';
import * as TableStyled from 'template/components/Table/TableStyled';
import map from 'lodash/map';
import debounce from 'lodash/debounce';
import ButtonComponent from 'template/components/Button/ButtonComponent';
import { Link } from 'react-router-dom';

class DashboardGroupsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getProductGroupsRequest = debounce(this.props.getProductGroupsRequest.bind(this), 300);
    this.onProductSearch = this.onProductSearch.bind(this);
  }

  componentWillMount() {
    this.props.getProductGroupsRequest({});
  }

  componentWillUnmount() {
    this.props.getProductGroupsIdle();
  }

  onProductSearch({ name }) {
    this.getProductGroupsRequest({ name });
  }

  render() {
    return (
      <DashboardGroupsStyled.Component>
        <DashboardGroupsStyled.Heading>Vehicles</DashboardGroupsStyled.Heading>

        <DashboardGroupsStyled.Search>
          <InputText>
            <input type="text" placeholder="Search by Groups" />
          </InputText>
        </DashboardGroupsStyled.Search>

        <TableStyled.Table>
          <TableStyled.TableHeader>
            <TableStyled.TableRow header>
              <TableStyled.TableCol>Group Name</TableStyled.TableCol>
              <TableStyled.TableCol>API Call</TableStyled.TableCol>
              <TableStyled.TableCol>Number of Vehicles</TableStyled.TableCol>
              <TableStyled.TableCol />
            </TableStyled.TableRow>
          </TableStyled.TableHeader>

          <TableStyled.TableBody>
            {map(this.props.productGroups.data, group => (
              <TableStyled.TableRow key={group._id}>
                <TableStyled.TableCol>{group.name}</TableStyled.TableCol>
                <TableStyled.TableCol>{group.endpoint}</TableStyled.TableCol>
                <TableStyled.TableCol>{(group.products || []).length}</TableStyled.TableCol>
                <TableStyled.TableCol>
                  <Link to={`/dashboard/groups/${group._id}`}><ButtonComponent size="small">Edit</ButtonComponent></Link>
                  <ButtonComponent size="small" onClick={this.props.onProductGroupDelete.bind(null, group)}>Delete</ButtonComponent>
                </TableStyled.TableCol>
              </TableStyled.TableRow>
            ))}
          </TableStyled.TableBody>
        </TableStyled.Table>
      </DashboardGroupsStyled.Component>
    );
  }
}

DashboardGroupsComponent.propTypes = {
  getProductGroupsRequest: PropTypes.func.isRequired,
  getProductGroupsIdle: PropTypes.func.isRequired,
  productGroups: PropTypes.shape().isRequired,
  onProductGroupEdit: PropTypes.func.isRequired,
  onProductGroupDelete: PropTypes.func.isRequired,
};

export default hoc(DashboardGroupsComponent);
