# Mongoose app Project

Mongoose app is a database powered RESTful API for Tasks management.

### How to use

```

1. Clone this repository

2. Open server.js, 
    
    Uncomment: 
      // const dbs = require('./config/db');
      // mongoose.connect('mongodb://localhost/mongoosedb');

    Comment out: 
      mongoose.connect(url);

    The current repository is set to my mongoLab database, which you are not able to connect to. Following the above will allow you to connect to your own local Mongo DB.

3. In terminal, goto the mongoose app directory and type: npm start

4. Add a task, etc

5. navigate to localhost:3000/tasks to see the tasks in your database

```

## Requirements

* Node js
* MongoDB

## Built With

* JavaScript
* Express
* MongoDB
* Mongoose


## Authors

* **Wilson Phoong** - [wphoong](https://github.com/wphoong)

## License

This is free to use by anyone. Feel free to do what you want with it!

## Acknowledgments

* Shoutout to [Open Dota](https://docs.opendota.com/)
