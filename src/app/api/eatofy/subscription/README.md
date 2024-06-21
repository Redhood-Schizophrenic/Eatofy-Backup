
# API Requests


----------------------------------------------------------------------------------

### Subscription Module

###### 1. Add
http://localhost:3000/api/eatofy/subscription/add
`POST`
```json
{
    "subscription_name": "Test",
    "price": "100000.00",
    "validity": 90
}
```

###### 2. Fetch
http://localhost:3000/api/eatofy/subscription/fetch
`POST | GET`
```json
{
    "subscription_id": "2de77322-60a3-455f-b3f6-a268bd2c8719"
}
```

###### 3. Update
http://localhost:3000/api/eatofy/subscription/update
`PUT`
```json
{
    "subscription_name": "Test1",
    "price": "100000.00",
    "validity": 90,
    "subscription_id": "2de77322-60a3-455f-b3f6-a268bd2c8719"
}
```

###### 4. Remove
http://localhost:3000/api/eatofy/subscription/remove
`DELETE`
```json
{
    "subscription_id": "2de77322-60a3-455f-b3f6-a268bd2c8719"
}
```

----------------------------------------------------------------------------------

