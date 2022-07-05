export const actionCreator = (type) => {
  return (payload) => {
    return {
      type,
      payload
    }
  }
}
