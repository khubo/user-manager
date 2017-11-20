export const success = (res, message, status = 200) => {
  res.statusCode = status
  res.send(message)
}

export const failure = (res, message, status = 401) => {
  res.statusCode = status
  res.send(message)
}