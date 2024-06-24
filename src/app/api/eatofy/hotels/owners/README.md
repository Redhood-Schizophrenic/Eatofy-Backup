# API Requests


----------------------------------------------------------------------------------

### Hotel's Owner Module

###### 1. Add
http://localhost:3000/api/eatofy/hotels/owners/add
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c",
    "owner_name": "Owner 1",
    "email": "owner@hotel.co",
    "password": "owner@123"
}
```

###### 2. Fetch
http://localhost:3000/api/eatofy/hotels/owners/fetch
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c",
}
```

###### 3. Update
http://localhost:3000/api/eatofy/hotels/owners/update
`PUT`
```json
{
    "owner_id": "ba4c0332-317f-4609-b011-6268f4bd12fc",
    "password": "new_password@123"
}
```

###### 4. Remove
http://localhost:3000/api/eatofy/hotels/owners/remove
`DELETE`
```json
{
    "owner_id": "ba4c0332-317f-4609-b011-6268f4bd12fc"
}
```

----------------------------------------------------------------------------------

