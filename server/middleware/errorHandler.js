function errorHandler (err, req, res, next) {

  if (err.name == "JsonWebTokenError"){
    res.status(401).json({message : "invalidToken"})
  }

  else if (err.name=="ValidationError"){
    
    res.status(400).json({
      message : err.message
    })

  }

  else{
    let message = err.message || "internal server error"
    let status = err.status || 500

    res.status(status).json({
      message : message
    })
  }
  
}

module.exports = errorHandler
