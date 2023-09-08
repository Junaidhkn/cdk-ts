exports.main = async function ( event, context ) {
   return {
      statusCode: 200,
      body: `I am working from ${process.env.TABLE_NAME} `
   }
}