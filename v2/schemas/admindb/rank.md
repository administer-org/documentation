# AdminRank

Holds data for admin ranks. Use [AdminRunner.Ranks.new](/v2/server/adminrunner#ar-ranks-new) to make one.

Schema Example:
```json
{
    "Protected": false,
    "Modified": 1751318854,
    "Modifications": [
        {
            "ActingAdmin": 133017837,
            "Actions": [
                "created this rank"
            ],
            "Reason": "Created this from the rank editor."
        }
    ],
    "CreationReason": "Created in the rank editor",
    "Name": "testing live re-ranking",
    "AdmRankVersion": 3,
    "Color": "c0f3f4",
    "CreatorID": 133017837,
    "Members": [
        {
            "ID": "1358166365",
            "MemberType": "User"
        }
    ],
    "RankID": 11,
    "Apps": {
        "V2Assistant": false,
        "PlayerManagement\\PlrDirectory": true,
        "AdmConfiguration": true,
        "PlayerManagement": true,
        "AdmConfiguration\\Settings": true,
        "CachedData": {
            "V2Assistant": {
                "Icon": "rbxassetid://16794205188",
                "Name": "2.0 Assistant"
            },
            "PlayerManagement\\PlrDirectory": {
                "Icon": "rbxassetid://84037313964620",
                "Name": "Directory"
            },
            "AdmConfiguration": {
                "Icon": "rbxassetid://16467780710",
                "Name": "Configuration"
            },
            "PlayerManagement": {
                "Icon": "rbxassetid://15317927036",
                "Name": "Player Management"
            },
            "AdmConfiguration\\Settings": {
                "Icon": "rbxassetid://15082584039",
                "Name": "Options"
            },
            "AdmHomepage": {
                "Icon": "rbxassetid://15477669816",
                "Name": "Home"
            },
            "AdmConfiguration\\Information": {
                "Icon": "rbxassetid://14919001252",
                "Name": "Information"
            },
            "PlayerManagement\\PlayerSearch": {
                "Icon": "rbxassetid://82207944923903",
                "Name": "Search"
            },
            "GlobalAnnouncements": {
                "Icon": "rbxassetid://13657718907",
                "Name": "Announcements"
            },
            "PlayerManagement\\BulkModerate": {
                "Icon": "rbxassetid://11284736452",
                "Name": "Bulk Moderate"
            },
            "AdmConfiguration\\Marketplace": {
                "Icon": "rbxassetid://14865439768",
                "Name": "Apps"
            },
            "TeamManager": {
                "Icon": "rbxassetid://132182722080082",
                "Name": "Team Manager"
            },
            "AdmConfiguration\\AdminConfig": {
                "Icon": "rbxassetid://15084609272",
                "Name": "Admins"
            }
        },
        "AdmHomepage": true,
        "AdmConfiguration\\Information": true,
        "PlayerManagement\\PlayerSearch": true,
        "GlobalAnnouncements": false,
        "PlayerManagement\\BulkModerate": true,
        "AdmConfiguration\\Marketplace": true,
        "TeamManager": true,
        "AdmConfiguration\\AdminConfig": true
    }
}

```
