# API Requests


----------------------------------------------------------------------------------

### Hotels Module

###### 1. Add Hotel
http://localhost:3000/api/eatofy/hotels/operations/add
`POST(formData())`
```json
{
    "hotel_name": "Hotel Name",
    "email": "hotel_name@hotel.io",
    "password": "hotel@123",
    "address": "275 Woodside Road, Hermannfurt, New Jersey - 53827, Lesotho",
    "speciality": [
        "Continental",
        "Chinese",
        "Sandwich",
        "Pizza",
        "Fast Food",
        "Desserts",
        "Beverages"
    ],
    "ratings": 4.5,
    "contacts": [
        "1234567890",
        "1234567891"
    ],
    "website":"https://www.google.com",
    "logo": File
}
```

###### 2. Fetch
http://localhost:3000/api/eatofy/hotels/operations/fetch
`POST | GET`
```json
{
    "hotel_name":"Hotel1"
}
```

###### 3.1 Update Details
http://localhost:3000/api/eatofy/hotels/operations/update/details
`PUT`
```json
{
    "hotel_name": "Hotel Name",
    "email": "hotel_name@hotel.io",
    "password": "hotel@123",
    "address": "275 Woodside Road, Hermannfurt, New Jersey - 53827, Lesotho",
    "speciality": [
        "Continental",
        "Chinese",
        "Sandwich",
        "Pizza",
        "Fast Food",
        "Desserts",
        "Beverages"
    ],
    "ratings": 4.5,
    "contacts": [
        "1234567890",
        "1234567891"
    ],
    "website":"https://www.google.com"
}
```

###### 3.2 Update Profile
http://localhost:3000/api/eatofy/hotels/operations/fetch
`PUT(formData())`
```json
{
    "logo": File
}
```

###### 4. Account Delete
http://localhost:3000/api/eatofy/hotels/operations/remove
`DELETE`
```json
{
    "hotel_id": "ba4c0332-317f-4609-b011-6268f4bd12fc"
}
```

----------------------------------------------------------------------------------

### Hotel's Schedule Module

###### 1. Add Hotel's Schedule
http://localhost:3000/api/eatofy/hotels/schedules/add
`POST`
```json
{
    "hotel_id": "746b728d-ff30-43fc-8ca6-643mdlkf5a5c",
    "day": "Monday",
    "open_time": "09:00:00",
    "close_time": "17:00:00"
}
```

###### 2. Fetch
http://localhost:3000/api/eatofy/hotels/schedules/fetch
`POST`
```json
{
    "hotel_id":"746b728d-ff30-43fc-8ca6-643mdlkf5a5c"
}
```
###### 3. Schedule Delete
http://localhost:3000/api/eatofy/hotels/schedules/remove
`DELETE`
```json
{
    "schedule_id": "ba4c0332-317f-4609-b011-6268f4bd12fc"
}
```

----------------------------------------------------------------------------------

