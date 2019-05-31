# Migrator-Frontend
The frontend for MongoDB migrations written in basic JS

## Usage
### URI
* The URI field should contain your mongoDB URI without the database name
> **Note:** Make sure you allow all ip address to access your DB (so that our servers can access your DB and do the migrations, else you can also deploy our server in your cloud, after all it's open source)

### Database
* This should be the name of the database on which you want to run the query

### Collection
* The collection on which you want to run your query

### Action
* The action you want to perform, currently it supports three actions - add, edit and delete

### Condition
* Again an optional field. Here you'll specify the actual condition. This should always be a string which can be parsed to a JSON object.
> **Note:** If you want the condition to be `_id`, then the condition needs to be 
`{"_id": "5c63bbc2547baf77ce76be18"}`

### Key
* The name of the key you want to add/edit or delete

### Value Type
* This is a mandatory field. Here you specify the data type of the value you're going to add. Currently the supported data types are string, array, object, int, float, null (null is when the value is supposed to be null)

### Value
* Here you'll add the actual value