const loadTables = () => {
  const hotels =
    $.get('/api/hotels')
      .then(hotels => {
        hotels.forEach(hotel => {
          $('#hotel-choices').append(`<option name="${hotel.id}">${hotel.name}</option>`);
        })
      });
  const restaurants =
    $.get('/api/restaurants')
      .then(restaurants => {
        restaurants.forEach(restaurant => {
          $('#restaurant-choices').append(`<option name="${restaurant.id}">${restaurant.name}</option>`);
        })
      });
  const activities =
    $.get('/api/activities')
      .then(activities => {
        activities.forEach(activity => {
          $('#activity-choices').append(`<option name="${activity.id}">${activity.name}</option>`);
        })
      });
}
