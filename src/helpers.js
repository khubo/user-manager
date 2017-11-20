export const success = (res, message, status = 200) => {
  res.setStatusCode = status
  res.send(message)
}

export const failure = (res, message, status = 401) => {
  res.setStautsCode = status
  res.send(message)
}