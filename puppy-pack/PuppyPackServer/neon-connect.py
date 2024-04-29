import os
import psycopg2
from dotenv import load_dotenv

# Load .env file
load_dotenv()

#Get connection string 
PGCONNNECTION_URI = os.getenv('PGCONNECTION_URI')
PGUSER = os.getenv('PGUSER')
PGDATABASE = os.getenv('PGDATABASE') 
PGPASSWORD = os.getenv('PGPASSWORD')
PGHOST = os.getenv('PGHOST')
PGPORT = os.getenv('PGPORT')


try:
    #Connect to the database
    conn = psycopg2.connect(PGCONNNECTION_URI)

    #Create a cursor object 
    cur = conn.cursor()

    # Execute SQL commands to retrieve the current time and version from PostgreSQL
    cur.execute('SELECT NOW();')
    time = cur.fetchone()[0]

    cur.execute('SELECT version();')
    version = cur.fetchone()[0]

    # Close the cursor and connection
    cur.close()
    conn.close()

    # Print the results
    print('**********************************************************************************************************\n')
    print('💚 Connected to neon server at ' + str(PGHOST),'\n')
    print('⌚ Current time:', time, '\n')
    print('🎟 PostgreSQL version:', version, '\n')
    print('**********************************************************************************************************\n')

except psycopg2.OperationalError as e:
    print("Unable to connect to the database. The database may not be running or the connection details may be incorrect.")
    print("Error message:", e)