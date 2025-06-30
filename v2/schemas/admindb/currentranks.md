# CurrentRanks

Holds data about the ranks in a given game.

## Schema Example
```json
{
    "AdminIDs": {
        "133017837": {
            "UserID": 133017837,
            "AdminRankName": "Administrator",
            "AdminRankID": 1
        },
        "64564564": {
            "UserID": "64564564",
            "AdminRankName": "please stop corrupting :(",
            "AdminRankID": 3
        },
        "1565267": {
            "UserID": "1565267",
            "AdminRankName": "cool rank",
            "AdminRankID": 9
        },
    },
    "Names": [
        "Administrator",
        "cool rank",
        "testing live reranking"
    ],
    "Count": 12,
    "GroupAdminIDs": {
        "25245_927db136-570b-4093-af46-162de652464a": {
            "RankNumber": "255",
            "RequireRank": true,
            "AdminRankID": 9,
            "GroupID": "25245",
            "AdminRankName": "cool rank"
        }
    }
}
```
