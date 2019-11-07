# BackBaseWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.


## Development server
Run `npm install` to get dependencies.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Project Structure

I started by creating the structure of the project and breaking the project into components, models and services

### Components
There are five main components
`city-list` this component renders of the currect weather condition of the cities.
`city-list-item` this component renders the current weather condition for a particular city
`city-forecast` this component holds the destination of the route to see for forecasts
`forecast-list` this component renders the list of 4hour forecasts (`forecast-list-item`) for a particular city
`forecast-list-item` this component renders a single 4hour forecast for a particular city

Other component
`weather-icon` this component renders an icon for a particular weather condition.

### Models and Data
`city` this model defines the data structure of the city data without weather condition.
`city-weather` this model defines the data structure of the city data with weather condition.
`forecast-weather` this model defines the data structure of forecasts of a city.
`city.data` this is the predefined data for the list of cities without weather condition.
`city-weather.data` this is the mock data for the list of cities with weather condition for testing purposes.
`forecast-weather.data` this is the mock data for the list of forecast for a particular city for testing purposes.

### Services 
`cities.service` this service has a resource function `getCities()` that will fetch the the data in `city.data`.
`weather.service` this service has two resource functions:
- `getWeatherDetailByCities()` this function accepts list of cities `City[]` as params and fetches data from OpenWeather to return current weather condition for those cities.
- `getForeCastDetailByCity()` this function accept a city `City` as param and fetches data from OpenWeather to return forecast weather condition for that city.

### Tests Cases
- `AppComponent`
- - should create the app
- - should have as title 'BaseWeather'
- - should render title in a h1 tag
- `CityForecastComponent`
- - should create
- `CityListItemComponent`
- - should create
- - should render time
- - should render city name
- - should render weather description
- - should render temperature
- - should render wind
- - can click city-list-item link in template
- `CityListComponent`
- - should create
- - should display five city-list-item on successfull call of getWeatherDetailByCities()
- `ForecastListItemComponent`
- - should create
- - should render time
- - should render time full
- - should render weather description
- - should render temperature
- - should render wind
- `ForecastListComponent`
- - should create
- - WeatherIconComponent
- - should create
- - should render the right icon
- `CitiesService`
- - should be created
- - should have a function called getCities and return a promise of City[]
- `WeatherService`
- - should be created
