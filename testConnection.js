//this file is to test the connection between the programs and database

const connectToDatabase = require('./dbConnect');

//this is a function to test the database connections
async function testConnection(){
    try{
        const database = await connectToDatabase();
        console.log('Successfully connected to the database. ',database.Recipes);
        }catch(error){
            console.error('Error: ', error);
        }finally {
            //close the database connection
            await database.client.close();
        }
}

//call the test function
testConnection();