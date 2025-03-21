//Input data here
import {
    PrismaClientKnownRequestError,
    PrismaClientValidationError,
    PrismaClientInitializationError,
  } from "@prisma/client/runtime/library";
  
  const errorMiddleware = (err, req, res, next) => {
    // Default error structure
    let error = {
      statusCode: err.statusCode || 500,
      message: err.message || "Something went wrong!",
    };
  
    // Log the error for debugging
    console.error("Error Middleware:", {
      message: err.message,
      stack: err.stack,
      name: err.name,
    });
  
    // Handle Prisma Client Known Request Errors (e.g., unique constraint violation)
    if (err instanceof PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        error.message = `Unique constraint failed on ${err.meta?.target || "unknown field"}`;
        error.statusCode = 400; // Bad Request
      } else {
        error.message = "Prisma Client Known Request Error";
        error.statusCode = 400;
      }
    }
  
    // Handle Prisma Client Validation Errors (e.g., schema validation (if values types are wrong eg putting string in number field))
    if (err instanceof PrismaClientValidationError) {
      error.message = "Prisma query validation failed";
      error.statusCode = 400; // Bad Request
    }
  
    // Handle Prisma Client Initialization Errors (e.g., database connection issues)
    if (err instanceof PrismaClientInitializationError) {
      error.message = "Prisma Client failed to initialize. Please check your database connection.";
      error.statusCode = 500; // Internal Server Error
    }
  
    // Send the error response
    res.status(error.statusCode).json({
      success: false,
      error: error.message,
    });

    
  };
  
  export default errorMiddleware;
