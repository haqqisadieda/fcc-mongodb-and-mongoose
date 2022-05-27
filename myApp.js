require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const personSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    favoriteFoods: {
        type: [String],
    },
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
    const pandega = new Person({
        name: 'Pandega',
        age: 28,
        favoriteFoods: ['Mie', 'Pizza'],
    });
    pandega.save((err, data) => {
        if (err) return console.error(err);
        done(null, data);
    });
};

const arrayOfPeople = [
    { name: 'Jon', age: 20, favoriteFoods: ['Chicken', 'Pork'] },
    { name: 'Radit', age: '23', favoriteFoods: ['Rice'] },
];

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, data) => {
        if (err) return console.error(err);
        done(null, data);
    });
};

const personName = 'Jon';

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, data) => {
        if (err) return console.error(err);
        done(null, data);
    });
};

const food = 'Pizza';

const findOneByFood = (food, done) => {
    Person.findOne({ favoriteFoods: food }, (err, data) => {
        if (err) return console.error(err);
        done(null, data);
    });
};

const findPersonById = (personId, done) => {
    Person.findById({ _id: personId }, (err, data) => {
        if (err) return console.error(err);
        done(null, data);
    });
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';
    Person.findById(personId, (err, person) => {
        if (err) return console.error(err);
        person.favoriteFoods.push(foodToAdd);

        person.save((err, data) => {
            if (err) return console.error(err);
            done(null, data);
        });
    });
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    Person.findOneAndUpdate(
        { name: personName },
        { age: ageToSet },
        (err, person) => {
            if (err) return console.error(err);
            done(null, data);
        }
    );
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = 'Mary';

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = 'burrito';

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
