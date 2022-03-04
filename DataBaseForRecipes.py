#going to import mysql to use to make a data base
import mysql.connector

#I know the basics of sql but I dont know how much that will help with mysql
# Set up the database
mydb = mysql.connector.connect(
	host= "localhost"
	user="admin"
	password = "na"
	)

#put in a cursor to iterate through the resutls of a query and preform on each row.
myCursor = mydb.cursor()
#Create the database and give it a name
mucursor.execute("CREATE DATABASE recipes")
	
