# API Requests


----------------------------------------------------------------------------------

### Table's Category Module

###### 1. Add
http://localhost:3000/api/hotel/tables/category/add
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c",
    "category_name": "Section-1"
}
```

###### 2. Fetch
http://localhost:3000/api/hotel/tables/category/fetch
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```

###### 3. Remove
http://localhost:3000/api/hotel/tables/category/delete
`DELETE`
```json
{
    "category_id": "ba4c0332-317f-4609-b011-6268f4bd12fc"
}
```

----------------------------------------------------------------------------------

