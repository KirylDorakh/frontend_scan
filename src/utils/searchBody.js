export const searchBody = {
    "issueDateInterval": {
        "startDate": "",
        "endDate": ""
    },
    "searchContext": {
        "targetSearchEntitiesContext": {
            "targetSearchEntities": [
                {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    "inn": null,
                    "maxFullness": true,
                    "inBusinessNews": null
                }
            ],
            "onlyMainRole": false,
            "tonality": "any",
            "onlyWithRiskFactors": false,
            "riskFactors": {
                "and": [],
                "or": [],
                "not": []
            },
            "themes": {
                "and": [],
                "or": [],
                "not": []
            }
        },
        "themesFilter": {
            "and": [],
            "or": [],
            "not": []
        }
    },
    "searchArea": {
        "includedSources": [],
        "excludedSources": [],
        "includedSourceGroups": [],
        "excludedSourceGroups": []
    },
    "attributeFilters": {
        "excludeTechNews": false,
        "excludeAnnouncements": false,
        "excludeDigests": false
    },
    "similarMode": "duplicates",
    "limit": 0,
    "sortType": "sourceInfluence",
    "sortDirectionType": "desc",
    "intervalType": "month",
    "histogramTypes": [
        "totalDocuments",
        "riskFactors"
    ]
}


// export const searchBody = {
//     "intervalType": "month",
//     "histogramTypes": [
//         "totalDocuments"
//     ],
//     "issueDateInterval": {
//         "startDate": "2021-11-01T09:56:41.266Z",
//         "endDate": "2023-11-01T09:56:41.266Z"
//     },
//     "searchContext": {
//         "targetSearchEntitiesContext": {
//             "targetSearchEntities": [
//                 {
//                     "type": "company"
//                 }
//             ],
//             "onlyMainRole": true,
//             "tonality": "any",
//             "onlyWithRiskFactors": true,
//             "riskFactors": {
//                 "and": [
//                     {
//                         "id": 0
//                     }
//                 ],
//                 "or": [
//                     {
//                         "id": 0
//                     }
//                 ],
//                 "not": [
//                     {
//                         "id": 0
//                     }
//                 ]
//             },
//             "themes": {
//                 "and": [
//                     {
//                         "tonality": "any",
//                         "entityId": 0
//                     }
//                 ],
//                 "or": [
//                     {
//                         "tonality": "any",
//                         "entityId": 0
//                     }
//                 ],
//                 "not": [
//                     {
//                         "tonality": "any",
//                         "entityId": 0
//                     }
//                 ]
//             }
//         },
//         "searchEntitiesFilter": {
//             "and": [
//                 {
//                     "type": "company"
//                 }
//             ],
//             "or": [
//                 {
//                     "type": "company"
//                 }
//             ],
//             "not": [
//                 {
//                     "type": "company"
//                 }
//             ]
//         },
//         "locationsFilter": {
//             "and": [
//                 {
//                     "countryCode": "string",
//                     "regionCode": 0
//                 }
//             ],
//             "or": [
//                 {
//                     "countryCode": "string",
//                     "regionCode": 0
//                 }
//             ],
//             "not": [
//                 {
//                     "countryCode": "string",
//                     "regionCode": 0
//                 }
//             ]
//         },
//         "themesFilter": {
//             "and": [
//                 {
//                     "entityId": 0
//                 }
//             ],
//             "or": [
//                 {
//                     "entityId": 0
//                 }
//             ],
//             "not": [
//                 {
//                     "entityId": 0
//                 }
//             ]
//         }
//     },
//     "searchArea": {
//         "includedSources": [
//             0
//         ],
//         "excludedSources": [
//             0
//         ],
//         "includedSourceGroups": [
//             0
//         ],
//         "excludedSourceGroups": [
//             0
//         ]
//     },
//     "attributeFilters": {
//         "excludeTechNews": true,
//         "excludeAnnouncements": true,
//         "excludeDigests": true
//     },
//     "similarMode": "none"
// }