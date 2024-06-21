# API Requests


----------------------------------------------------------------------------------

###  Module

###### 1. Add
http://localhost:3000/api/hotel/tables/operations/add
`POST`
```json
{
    "category_id": "a8f692ee-4b2d-4017-8b16-f8575004f3fc",
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c",
    "table_name": "T1",
    "description": "A Normal Table.",
    "status": "Open",
    "persons_occupiable": 4
}
```

###### 2. Fetch a Table's Details
http://localhost:3000/api/hotel/tables/operations/fetch/one
`POST`
```json
{
    "table_id": "c4bf82e4-cad7-4b68-a40e-69256071e06c"
}
```

###### 3. Fetch all Tables Details
http://localhost:3000/api/hotel/tables/operations/fetch/all
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```
###### 4. Update
http://localhost:3000/api/hotel/tables/operations/update
`PUT`
```json
{
    "table_id": "c4bf82e4-cad7-4b68-a40e-69256071e06c",
    "table_name": "T1",
    "description": "A Normal Table.",
    "status": "Open",
    "persons_occupiable": 6
}
```

###### 5. Remove
http://localhost:3000/api/hotel/tables/operations/remove
`DELETE`
```json
{
    "table_id": "c4bf82e4-cad7-4b68-a40e-69256071e06c"
}
```

----------------------------------------------------------------------------------

