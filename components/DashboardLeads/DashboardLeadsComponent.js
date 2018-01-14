import React, { PropTypes } from 'react';
import hoc from 'template/components/DashboardLeads/hoc';
import * as DashboardLeadsStyled from 'template/components/DashboardLeads/DashboardLeadsStyled';
import * as TableStyled from 'template/components/Table/TableStyled';
import map from 'lodash/map';

class DashboardLeadsComponent extends React.Component {
  componentWillMount() {
    this.props.getProductEnquiriesRequest({});
  }

  componentWillUnmount() {
    this.props.getProductEnquiriesIdle();
  }

  render() {
    return (
      <DashboardLeadsStyled.Component>
        <DashboardLeadsStyled.Heading>Leads</DashboardLeadsStyled.Heading>

        <TableStyled.Table>
          <TableStyled.TableHeader>
            <TableStyled.TableRow header>
              <TableStyled.TableCol>Name</TableStyled.TableCol>
              <TableStyled.TableCol>Email</TableStyled.TableCol>
              <TableStyled.TableCol>Phone</TableStyled.TableCol>
              <TableStyled.TableCol>Item</TableStyled.TableCol>
            </TableStyled.TableRow>
          </TableStyled.TableHeader>

          <TableStyled.TableBody>
            {map(this.props.enquiries.data, enquiry => (
              <TableStyled.TableRow key={enquiry._id}>
                <TableStyled.TableCol>{enquiry.Prospect.FirstName} {enquiry.Prospect.LastName}</TableStyled.TableCol>
                <TableStyled.TableCol>{enquiry.Prospect.Email}</TableStyled.TableCol>
                <TableStyled.TableCol>{enquiry.Prospect.HomePhone}</TableStyled.TableCol>
                <TableStyled.TableCol>{enquiry.Item.Make} {enquiry.Item.Model} (#{enquiry.Item.StockNumber})</TableStyled.TableCol>
              </TableStyled.TableRow>
            ))}
          </TableStyled.TableBody>
        </TableStyled.Table>
      </DashboardLeadsStyled.Component>
    );
  }
}

DashboardLeadsComponent.propTypes = {
  getProductEnquiriesRequest: PropTypes.func.isRequired,
  getProductEnquiriesIdle: PropTypes.func.isRequired,
  enquiries: PropTypes.shape().isRequired,
};

export default hoc(DashboardLeadsComponent);
