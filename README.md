
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

_Returns_
```
{
    "id": 1,
    "userId": "58699668-d184-4e90-b31d-1768cd33de8d",
    "updated_at": "2022-05-09T13:37:59.088Z",
    "created_at": "2022-05-09T13:37:59.088Z"
}
```

---

#### Get all Attendance

```http
  GET /api/attendances/getall
```
**HEADER PARAMS**
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `x-access-token`      | `string` | **Required**. accessToken returned after user signin |

_Returns_
```
[
    {
        "id": 0,
        "created_at": "2022-05-09T13:15:39.000Z",
        "updated_at": "2022-05-09T13:15:39.000Z",
        "userId": "58699668-d184-4e90-b31d-1768cd33de8d"
    },
    {
        "id": 1,
        "created_at": "2022-05-09T13:37:59.000Z",
        "updated_at": "2022-05-09T13:37:59.000Z",
        "userId": "58699668-d184-4e90-b31d-1768cd33de8d"
    }
]
```

---


## MANY MORE UNDER PROGRESS -- COME BACK LATER