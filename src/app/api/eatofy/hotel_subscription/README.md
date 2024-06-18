# API Requests


----------------------------------------------------------------------------------

### Hotel's Subscription Module

###### 1. Add
http://localhost:3000/api/eatofy/hotel_subscription/add
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c",
    "subscription_id": "8ddc9b99-ac99-403d-bee6-f1fcf5fc8ac1",
    "is_valid": true,
    "start_date": "2024-06-18T22:00:00Z",
    "end_date": "2024-09-16T22:00:00Z"
}
```

###### 2. Fetch
http://localhost:3000/api/eatofy/hotel_subscription/fetch
`POST | GET`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```

###### 3. Update
http://localhost:3000/api/eatofy/hotel_subscription/update
`PUT`
```json
{
    "hotel_subscription_id": "7220e4e8-4a0f-4e9d-b006-b3a782f97be6",
    "is_valid": false
}
```

###### 4. Remove
http://localhost:3000/api/eatofy/hotel_subscription/remove
`DELETE`
```json
{
    "hotel_subscription_id": "ba4c0332-317f-4609-b011-6268f4bd12fc"
}
```

----------------------------------------------------------------------------------

