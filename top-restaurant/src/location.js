export default function location(){
    const workingHours = ['Monday - Thursday: 11:30am - 9pm', 'Friday - Saturday: 11:30am - 10pm', 'Sunday: 12pm - 9pm'];
    const container = document.querySelector("#content");
    const locationSelected = document.querySelector('#location');
    locationSelected.classList.add('menu-item-selected'); 
    
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('inner-content');    
    
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Find us on the map';

    const locationMap = document.createElement('div');
    locationMap.id = 'map';
    
    locationContainer.appendChild(h1);
    locationContainer.appendChild(locationMap);

    const hoursHeader = document.createElement('h3');
    hoursHeader.innerHTML = 'Hours';
    locationContainer.appendChild(hoursHeader);

    for (let i = 0; i < workingHours.length; i++) {
      let listItem = document.createElement('p');
      listItem.innerHTML = workingHours[i];
      locationContainer.appendChild(listItem);
    }

    container.appendChild(locationContainer);
    
    let wassabiCoordinates = {lat: 35.73, lng: -78.80};
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: wassabiCoordinates});
    let marker = new google.maps.Marker({position: wassabiCoordinates, map:map})
  }