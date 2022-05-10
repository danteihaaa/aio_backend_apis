
# AIO(All in One Management System) Backend Project

Backend system for All in One Management System Project! Written using Node + Express.js with Sequelize as ORM!

## Acknowledgements

 - [nodejs-sequelize-mysql-api template](https://github.com/indraarianggi/nodejs-sequelize-mysql-api)
## API Reference

#### Authentication (signup)

```http
  POST /api/auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username (ie roll_no) |
| `email` | `string` | **Required**. email |
| `password` | `string` | **Required**. Password |

_Returns_
```
{
    "message": "User was registered successfully!"
}
```

---

#### Authentication (signin)

```http
  POST /api/auth/signin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required**. Username (ie roll_no) |
| `password` | `string` | **Required**. Password |

_Returns_
```
{
    "id": "58699668-d184-4e90-b31d-1768cd33de8d",
    "username": "hsk1",
    "email": "hari015841@gmail.com",
    "roles": [
        "ROLE_USER"
    ],
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4Njk5NjY4LWQxODQtNGU5MC1iMzFkLTE3NjhjZDMzZGU4ZCIsImlhdCI6MTY1MjEwMzExOCwiZXhwIjoxNjUyMTg5NTE4fQ.ynRaOTT8nA2kf2kikuyXyPpUwRR0HM8bbV2Xy0JwBXY"
}
```

---

#### Mark Attendance For Today

```http
  POST /api/attendances/mark
```
**HEADER PARAMS**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. accessToken returned after user signin |

**JSON Request Body**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rollno`      | `integer` | **Required**. Rollno of student |

_Returns_
```
[
    {
        "id": 1,
        "created_at": "2022-05-10T07:07:16.000Z",
        "updated_at": "2022-05-10T07:07:16.000Z",
        "userId": "ad805313-716d-4e5f-bcfc-5758609d3d5c",
        "studentRollno": 102003066
    }
]
```

---

#### Give Laundary

```http
  POST /api/laundary/give
```
**HEADER PARAMS**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. accessToken returned after user signin |

**JSON Request Body**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rollno`      | `integer` | **Required**. Rollno of student |
| `data`      | `JSON String` | **Required**. Json encoded clothes data |

_Returns_
```
{
    "isCollected": false,
    "id": 6,
    "userId": "ad805313-716d-4e5f-bcfc-5758609d3d5c",
    "data": [
        {
            "T-Shirts": 2,
            "Shirts": 3,
            "Jeans": 1,
            "Bedsheet": 3
        }
    ],
    "studentRollno": 102003066,
    "updated_at": "2022-05-10T07:50:42.541Z",
    "created_at": "2022-05-10T07:50:42.541Z"
}
```

---

#### Get My Laundary

```http
  GET /api/laundary/get
```
**HEADER PARAMS**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. accessToken returned after user signin |

**JSON Request Body**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rollno`      | `integer` | **Required**. Rollno of student |

_Returns_
```
[
    {
        "id": 6,
        "data": "[{\"T-Shirts\":2,\"Shirts\":3,\"Jeans\":1,\"Bedsheet\":3}]",
        "isCollected": false,
        "created_at": "2022-05-10T07:50:42.000Z",
        "updated_at": "2022-05-10T07:50:42.000Z",
        "userId": "ad805313-716d-4e5f-bcfc-5758609d3d5c",
        "studentRollno": 102003066
    }
]
```

---

#### Collect Laundary

```http
  GET /api/laundary/collect
```
**HEADER PARAMS**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. accessToken returned after user signin |

**JSON Request Body**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rollno`      | `integer` | **Required**. Rollno of student |
| `laundaryId`      | `integer` | **Required**. Specific laundary Id of receipt |

_Returns_
```
{
    "message": "Successfully collected.",
    "receipt": {
        "id": 6,
        "data": "[{\"T-Shirts\":2,\"Shirts\":3,\"Jeans\":1,\"Bedsheet\":3}]",
        "isCollected": true,
        "created_at": "2022-05-10T07:50:42.000Z",
        "updated_at": "2022-05-10T07:53:50.591Z",
        "userId": "ad805313-716d-4e5f-bcfc-5758609d3d5c",
        "studentRollno": 102003066
    }
}
```

---

## MANY MORE UNDER PROGRESS -- COME BACK LATER