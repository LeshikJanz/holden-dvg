import requestProvider from 'api/requestProvider';

export const postDashboardAuth = (data) =>
  requestProvider.post('/api/users/login', data)
  .then(res => res.data);

/**
 * Pages
 */
export const getDashboardProducts = (data) =>
  requestProvider.get('/api/products/dashboard', { params: data })
  .then(res => res.data);

/**
 * Products
 */
export const getProductGroups = (data) =>
  requestProvider.get('/api/productGroups', { params: data })
  .then(res => res.data);

export const getProductGroup = (id) =>
  requestProvider.get(`/api/productGroups/${id}`)
  .then(res => res.data);

export const postProductGroup = (data) =>
  requestProvider.post('/api/productGroups', data)
  .then(res => res.data);

export const putProductGroup = (id, data) =>
  requestProvider.put(`/api/productGroups/${id}`, data)
  .then(res => res.data);

export const deleteProductGroup = (data) =>
  requestProvider.delete('/api/productGroups', data)
  .then(res => res.data);

export const getProductEnquiries = (data) =>
  requestProvider.get('/api/productEnquiries', { params: data })
  .then(res => res.data);

export const postProductEnquiry = (data) =>
  requestProvider.post('/api/productEnquiries', data)
  .then(res => res.data);

/**
 * Products
 */
export const getProductCategories = (data) =>
  requestProvider.get('/api/productCategories', { params: data })
  .then(res => res.data);

export const getProductCategory = (id) =>
  requestProvider.get(`/api/productCategories/${id}`)
  .then(res => res.data);

export const postProductCategory = (data) =>
  requestProvider.post('/api/productCategories', data)
  .then(res => res.data);

export const putProductCategory = (id, data) =>
  requestProvider.put(`/api/productCategories/${id}`, data)
  .then(res => res.data);

export const deleteProductCategory = (data) =>
  requestProvider.delete('/api/productCategories', data)
  .then(res => res.data);

/**
 * Products
 */
export const getFunnelPages = (data) =>
  requestProvider.get('/api/funnelPages', { params: data })
  .then(res => res.data);

export const getFunnelPage = (id, data) =>
  requestProvider.get(`/api/funnelPages/${id}`, { params: data })
  .then(res => res.data);

export const postFunnelPage = (data) =>
  requestProvider.post('/api/funnelPages', data)
  .then(res => res.data);

export const putFunnelPage = (id, data) =>
  requestProvider.put(`/api/funnelPages/${id}`, data)
  .then(res => res.data);

export const deleteFunnelPage = (data) =>
  requestProvider.delete('/api/funnelPages', data)
  .then(res => res.data);
