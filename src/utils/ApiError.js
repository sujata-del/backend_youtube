class ApiError extends Error{
    constructor(
        statusCode,
        message="Something Went Wrong",
        error=[],
        statck=""
    ){
        super(mesaage)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export{ApiError}