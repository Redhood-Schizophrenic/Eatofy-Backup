# API Requests


----------------------------------------------------------------------------------

### Customer Relationship Management Module

###### 1. Add Full Customer Details
http://localhost:3000/api/hotel/customer/add/all
`POST`
```json
{
    "customer_name": "user",
    "contact": "9123767892",
    "email": "user@gmail.com",
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```

###### 2. Add Customer Name
http://localhost:3000/api/hotel/customer/add/name
`POST`
```json
{
    "customer_name": "user",
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```
###### 3. Add Customer Contact
http://localhost:3000/api/hotel/customer/add/contact
`POST`
```json
{
    "customer_name": "user",
    "contact": "9123767892",
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```
###### 4. Add Customer Email
http://localhost:3000/api/hotel/customer/add/email
`POST`
```json
{
    "customer_name": "user",
    "email": "user@gmail.com",
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```


###### 5. Fetch a Customer's Details
http://localhost:3000/api/hotel/customer/fetch/single
`POST`
```json
{
    "customer_id": "405ed1af-3007-4b08-838c-39f5d5ae2f4e"
}
```

###### 6. Fetch all Customer's Details
http://localhost:3000/api/hotel/customer/fetch/all
`POST`
```json
{
    "hotel_id": "746b236d-ff30-43fc-8ca6-643dedac5a5c"
}
```
###### 7. Update
http://localhost:3000/api/hotel/customer/update
`PUT`
```json
{
    "customer_name": "Shashank Sangawar",
    "contact": "9137760771",
    "email": "shashanksangawar.model@gmail.com",
    "customer_id": "405ed1af-3007-4b08-838c-39f5d5ae2f4e"
}
```

###### 8. Remove
http://localhost:3000/api/hotel/customer/remove
`DELETE`
```json
{
    "customer_id": "c4bf82e4-cad7-4b68-a40e-69256071e06c"
}
```

----------------------------------------------------------------------------------

