#going to use SQLite for the database
import sqlite3
#create a file the database can keep stuff in
connection = sqlite3.connect("recipes.db")
#check to see if the Database file was made
#added the print words to see it it worked.
print("This is the output", connection.total_changes)
#if this works there should be an output of 0
# There is an out put of 0. So far so good. 
 ### MAKE A SAMPLE DATABASE
 
