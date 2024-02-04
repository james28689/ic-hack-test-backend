const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8080;

const data = {
    "47009eb7b9b18bbdbdba8b8c6c956ad0" : {
        "top_5_visited": [
            {
                "website": "https://www.google.com",
                "visits": 100
            },
            {
                "website": "https://www.facebook.com",
                "visits": 90
            },
            {
                "website": "https://www.youtube.com",
                "visits": 80
            },
            {
                "website": "https://www.amazon.com",
                "visits": 70
            },
            {
                "website": "https://www.yahoo.com",
                "visits": 60
            }
        ],
        "top_10_search_terms": [
            {
                "term": "daniel",
                "count": 100
            },
            {
                "term": "ice cream",
                "count": 90
            },
            {
                "term": "puppies",
                "count": 80
            },
            {
                "term": "kittens",
                "count": 70
            },
            {
                "term": "pandas",
                "count": 60
            },
            {
                "term": "penguins",
                "count": 50
            },
            {
                "term": "tigers",
                "count": 40
            },
            {
                "term": "lions",
                "count": 30
            },
            {
                "term": "bears",
                "count": 20
            },
            {
                "term": "oh my",
                "count": 10
            }
        ],
        "num_forgot_incognito": 5
    }
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/:id", async (req, res) => {
    res.json(
        data[req.params.id]
    )
});