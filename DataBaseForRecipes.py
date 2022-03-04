#going to use SQLite for the database
import sqlite3
#create a file the database can keep stuff in
################# DID NOT WORK WILL###########
# I might need to add MyOwnProject/Recipes/recipes.db will try asap
connection = sqlite3.connect(recipes.db)
#check to see if the Database file was made
print(connection.total_changes)
#if this works there should be an output of 0