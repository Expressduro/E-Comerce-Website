const mongoose = require('mongoose');
try{
    mongoose.connect('mongodb://localhost:27017/e-commerce', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("DB connected");
}
catch{
    console.error(Error);
}