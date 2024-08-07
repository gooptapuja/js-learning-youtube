// const tinderUser = new Object()//singletone object
// console.log(tinderUser);

const tinderUser = {}
tinderUser.id = "123dfg"
tinderUser.name="jasmini"
tinderUser.age = 45

// console.log(tinderUser);

const regularUser = {
    email:"some456@gmail.com",
    fullname:{
        username:{
            firstname: "pooja",
            lastname: "gupta"
        }
    }

}

// console.log(regularUser.fullname.username.firstname);

const obj1 = {
    a:1,
   b:2
}

const obj2 = {
    c:3,
    d:4
}

const obj3 = {
     e:5,
     f:6
}
 const obj4 = {...obj1,...obj2,...obj3}
//  const obj4 =Object.assign({},obj1,obj2,obj3)
//  console.log(obj4);

const arrayObject = [
    {
        id:1,
        email:"hjii889@gmail.com"
    },
    {
        id:2,
        email:"hjii889@gmail.com"
    },
    {
        id:3,
        email:"hjii889@gmail.com"
    },
    {
        id:4,
        email:"hjii889@gmail.com"
    },
]


// console.log(Object.freeze(arrayObject));

arrayObject[1].email = "gupta892@gmail.com"
// console.log(arrayObject);
// console.log(Object.keys(arrayObject[1]));
// console.log(Object.values(arrayObject[1]));
// console.log(arrayObject.hasOwnProperty('class'));

//*****************/ d-strctring of an object*****************************

const student = {
    studentId: 1,
    studentName: "priya",
    studentAge:26
}
 const {studentAge : ageonly} = student
 console.log(ageonly);
// -------------------------JSON(JAVASCRIPT OBJECT NOTATION)------------------
const jsonApi ={
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Erlese",
          "last": "da Conceição"
        },
        "location": {
          "street": {
            "number": 2698,
            "name": "Rua Três"
          },
          "city": "Caraguatatuba",
          "state": "Alagoas",
          "country": "Brazil",
          "postcode": 43350,
          "coordinates": {
            "latitude": "-72.9215",
            "longitude": "141.3745"
          },
          "timezone": {
            "offset": "-3:00",
            "description": "Brazil, Buenos Aires, Georgetown"
          }
        },
        "email": "erlese.daconceicao@example.com",
        "login": {
          "uuid": "43254e30-5122-4451-a688-b5b9ecc23831",
          "username": "orangepanda391",
          "password": "long",
          "salt": "gjiqvf6z",
          "md5": "4ed03c48d939c0971ed0809ae2b14955",
          "sha1": "a5c70d3c338981e0ebb3059e6be4951cc56f26f1",
          "sha256": "d1e54e0bfba45b3a80bacaafd4dadff880bd13e3008ec03e3c3a94adb10c2ee4"
        },
        "dob": {
          "date": "1985-08-02T05:25:06.805Z",
          "age": 39
        },
        "registered": {
          "date": "2013-08-24T03:48:25.983Z",
          "age": 10
        },
        "phone": "(77) 1252-0129",
        "cell": "(07) 5041-9544",
        "id": {
          "name": "CPF",
          "value": "758.823.752-10"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/88.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
        },
        "nat": "BR"
      }
    ],
    "info": {
      "seed": "95e9dd5b63bd6053",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }


  console.log(jsonApi.info);
  console.log(jsonApi.results[0].location.state);
  
  



 





   
 
 


