name: { type: String, required: true, trim: true }
address: { type: String, required: true, trim: true }

Display All
GET method -> http://127.0.0.1:8000/api/persons/ -> Send

Get Person based on pid
GET method -> http://127.0.0.1:8000/api/persons/1 -> Send

Insert New Record-1
POST method -> http://127.0.0.1:8000/api/persons/
Body -> x-www-form-urlencoded
key         value
name        Raj
address     Kathmandu   
-> Send

Insert New Record-2
POST method -> http://127.0.0.1:8000/api/persons/
Body -> form-data
key         value
name        Reeta
address     Kathmandu   
-> Send

Insert New Record-3
POST method -> http://127.0.0.1:8000/api/persons/
Body -> raw
{
    "name": "Rhydam",
    "address": "Kathmandu"
}
-> Send