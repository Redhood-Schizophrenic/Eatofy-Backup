# API Requests


----------------------------------------------------------------------------------

### Table Reservation Module

###### 1. Add
http://localhost:3000/api/hotel/tables/reservation/add
`POST`
```json
{
    "occasion": "",
    "date": "2024-12-22",
    "time": "21:00:00",
    "customer_id": "405ed1af-3007-4b08-838c-39f5d5ae2f4e",
    "table_id": "c4bf82e4-cad7-4b68-a40e-69256071e06c",
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```

###### 2. Fetch a Table's Reservation Details
http://localhost:3000/api/hotel/tables/reservation/fetch/one
`POST`
```json
{
    "reservation_id": "92d70088-0bbf-4a5b-b75c-b9c22afcad7c"
}
```

###### 3. Fetch all Hotel's Table Reservations Details
http://localhost:3000/api/hotel/tables/reservation/fetch/all
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```
###### 4. Update
http://localhost:3000/api/hotel/tables/reservation/update
`PUT`
```json
{
    "occasion": "Birthday",
    "date": "2024-12-22",
    "time": "21:00:00",
    "reservation_id": "92d70088-0bbf-4a5b-b75c-b9c22afcad7c"    
}
```

###### 5. Remove
http://localhost:3000/api/hotel/tables/reservation/remove
`DELETE`
```json
{
    "table_id": "c4bf82e4-cad7-4b68-a40e-69256071e06c"
}
```

----------------------------------------------------------------------------------

