 

exports.get_all_hotels = (req, res, next) => {
 
      const response = {
        message : "Handling get requests to /hotels. All hotels list is provided to you as following",
        hotels : 
        {hotel1 : {
          "label": "My Hotel",
          "locationName": "Siliguri",
          "locationId": "734006",
          "id": "777",
          "fullName": "My Hotel Full Name",
          "full_address": "siliguri Isckon Temple"
        },
        hotel2 : {
          "label": "My Hotel",
          "locationName": "Siliguri",
          "locationId": "734006",
          "id": "777",
          "fullName": "My Hotel Full Name",
          "full_address": "siliguri Isckon Temple"
      }
    }
      };
      res.status(200).json(response);
   
};

exports.create_hotel = (req, res, next) => {
 
  const response = {
    message : "Handling post requests to /hotels. A request to create a hotel is sujbmitted with following request_body",
    request_body : req.body
  };
  res.status(201).json(response);

};

exports.get_hotel = (req, res, next) => {
 
  const response = {
    message : "Handling get requests to /hotels. A request  to fetch a particulal hotel with hotelId = " + req.params.hotelId,
    hotel : {
      "label": "My Hotel",
      "locationName": "Siliguri",
      "locationId": "734006",
      "id": "777",
      "fullName": "My Hotel Full Name",
      "full_address": "siliguri Isckon Temple"
  }
  };
  res.status(200).json(response);

};

exports.update_hotel = (req, res, next) => {
 
  const response = {
    message : "Handling patch requests to /hotels. A request to update a particulal hotel with hotelId = " + req.params.hotelId
  };
  res.status(200).json(response);

};

exports.delete_hotel = (req, res, next) => {
 
  const response = {
    message : "Handling delete requests to /hotels. A request to delete a particulal hotel with hotelId = " + req.params.hotelId
  };
  res.status(200).json(response);

};



 
