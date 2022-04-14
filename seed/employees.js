const db = require("../db")
const { faker } = require('@faker-js/faker');

const User = require("../models/employee")

db.on("error",console.error.bind(console,"mongodb connection error:"))

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233
const randomCity = faker.address.city();



const main = async () => {
    const employee = [
        {
           
            first_name: "Bruno",
            last_name: "Galvao",
            email: "bruno.galvao@ga.co",
            job_title: "Software Engineering Instructor",
            address: {
                street: "10 E 21St St",
                city: "New York",
                state: "NY",
                zip: "10010"
            }
        },
        {
            
            first_name: "Claire",
            last_name: "Galvao",
            email: "claire.galvao@ga.co",
            job_title: "product design Instructor",
            address: {
                street: "10 E 21St St",
                city: "New York",
                state: "NY",
                zip: "10010"
            }
        },
        {
            
            first_name:  "Joey",
            last_name: "Galvao",
            email: "joey.galvao@ga.co",
            job_title: "Ux/Ui Instructor",
            address: {
                street: "10 E 21St St",
                city: "New York",
                state: "NY",
                zip: "10010"
            }
        },
        {
            
            first_name: "Abe",
            last_name: "Galvao",
            email: "abe.galvao@ga.co",
            job_title: "Software Engineering Instructor",
            address: {
                street: "10 E 21St St",
                city: "New York",
                state: "NY",
                zip: "10027"
            }
        },
        {
            
            first_name: "Sunny",
            last_name: "Galvao",
            email: "sunny.galvao@ga.co",
            job_title: "Software Engineering Instructor",
            address: {
                street: "10 E 21St St",
                city: "New York",
                state: "NY",
                zip: "10010"
            }
        }
        
     

    ];
    await User.insertMany(employee);
    console.log("Created employee!");
  };
  const run = async () => {
    await main();
    db.close();
  };
  run();