export function wrapResponse(data) {
  return {
    data,
    status: 200,
    statusText: 'ok',
    headers: {},
    config: {}
  }
}