import { withState, withHandlers, withProps, onlyUpdateForKeys, compose } from 'recompose';

export default (DashboardFunnelForm) => compose(
  withState('campaignName', 'updateCampaignName', ''),
  withState('pageName', 'updatePageName', ''),
  withState('url', 'updateUrl', ''),
  withState('pageTitle', 'updatePageTitle', ''),
  withState('endpoint', 'updateEndpoint', ''),
  withState('headerText', 'updateHeaderText', ''),
  withHandlers({
    onCampaignNameChange: ({ updateCampaignName }) => event => { updateCampaignName(event.target.value); },
    onPageNameChange: ({ updatePageName }) => event => { updatePageName(event.target.value); },
    onUrlChange: ({ updateUrl }) => event => { updateUrl(event.target.value); },
    onPageTitleChange: ({ updatePageTitle }) => event => { updatePageTitle(event.target.value); },
    onEndpointChange: ({ updateEndpoint }) => event => { updateEndpoint(event.target.value); },
    onHeaderTextChange: ({ updateHeaderText }) => event => { updateHeaderText(event.target.value); },
  }),
  withProps(props => ({
    ...props,
    form: {
      campaignName: props.campaignName,
      pageName: props.pageName,
      url: props.url,
      pageTitle: props.pageTitle,
      endpoint: props.endpoint,
      headerText: props.headerText,
    }
  })),
  onlyUpdateForKeys(['campaignName', 'pageName', 'url', 'pageTitle', 'endpoint', 'headerText'])
)(DashboardFunnelForm);
