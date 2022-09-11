export type Hotel = 
  {
    "id": string,
    "property": {
      "propertyId": string,
      "title": string,
      "address": Array<string>,
      "previewImage": {
        "url": string,
        "caption": string,
        "imageType": string
      },
      "rating": {
        "ratingValue": number,
        "ratingType": string
      }
    },
    "offer": {
      "promotion": {
        "title": string,
        "type": string
      },
      "name": string,
      "displayPrice": {
        "amount": number,
        "currency": string
      },
      "savings": {
        "amount": number,
        "currency": string
      },
      "cancellationOption": {
        "cancellationType": string
      }
    }
  };