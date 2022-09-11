export type Property = {
  "propertyId": string;
  "title": string;
  "address": Array<string>;
  "previewImage": PreviewImage;
  "rating": Rating;
}

export type PreviewImage = {
  "url": string;
  "caption": string;
  "imageType": string;
}

export type Rating = { 
  "ratingValue": number;
  "ratingType": string;
}

export type Offer = {
  "promotion": {
    "title": string;
    "type": string;
  }
  "name": string;
  "displayPrice": {
    "amount": number;
    "currency": string;
  }
  "savings": {
    "amount": number;
    "currency": string;
  }
  "cancellationOption": {
    "cancellationType": string;
  }
}

export type Hotel = 
  {
    "id": string,
    "property": Property;
    "offer": Offer;
  };