
const asyncHandler= (requestHandler)=>{
   return  (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).asyncHandler.
        catch((err)=>next(err))
    }
}

//Above code based on promise 

export{asyncHandler}





/*
const asyncHandler =(fn) =>async(req,res,next)=>{
 try{
 await fn(req,res,next)
 }catch(error){
 res.status(err.code||500).json({
 success:false,
 message:err.message })}  
}
Above code based on try catch method
*/ 