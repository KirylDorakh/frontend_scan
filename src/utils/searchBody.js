export const searchBody = {
    "intervalType": "month",
    "histogramTypes": [
        "totalDocuments"
    ],
    "issueDateInterval": {
        "startDate": "2023-10-30T10:08:54.166Z",
        "endDate": "2023-10-30T10:08:54.167Z"
    },
    "searchContext": {
        "targetSearchEntitiesContext": {
            "targetSearchEntities": [
                {
                    "type": "company"
                }
            ],
            "onlyMainRole": true,
            "tonality": "any",
            "onlyWithRiskFactors": true,
            "riskFactors": {
                "and": [
                    {
                        "id": 0
                    }
                ],
                "or": [
                    {
                        "id": 0
                    }
                ],
                "not": [
                    {
                        "id": 0
                    }
                ]
            },
            "themes": {
                "and": [
                    {
                        "tonality": "any",
                        "entityId": 0
                    }
                ],
                "or": [
                    {
                        "tonality": "any",
                        "entityId": 0
                    }
                ],
                "not": [
                    {
                        "tonality": "any",
                        "entityId": 0
                    }
                ]
            }
        },
        "searchEntitiesFilter": {
            "and": [
                {
                    "type": "company"
                }
            ],
            "or": [
                {
                    "type": "company"
                }
            ],
            "not": [
                {
                    "type": "company"
                }
            ]
        },
        "locationsFilter": {
            "and": [
                {
                    "countryCode": "string",
                    "regionCode": 0
                }
            ],
            "or": [
                {
                    "countryCode": "string",
                    "regionCode": 0
                }
            ],
            "not": [
                {
                    "countryCode": "string",
                    "regionCode": 0
                }
            ]
        },
        "themesFilter": {
            "and": [
                {
                    "entityId": 0
                }
            ],
            "or": [
                {
                    "entityId": 0
                }
            ],
            "not": [
                {
                    "entityId": 0
                }
            ]
        }
    },
    "searchArea": {
        "includedSources": [
            0
        ],
        "excludedSources": [
            0
        ],
        "includedSourceGroups": [
            0
        ],
        "excludedSourceGroups": [
            0
        ]
    },
    "attributeFilters": {
        "excludeTechNews": true,
        "excludeAnnouncements": true,
        "excludeDigests": true
    },
    "similarMode": "none"
}