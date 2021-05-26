# OMDB API Query App

#### a simple Node.js program. that fetch's movies from the OMDB API.

## Getting Started

---

#### provide your api Key at the `const` variable

```javascript
const APIKEY = "your api key";
```

#### To query a movie or TV show you need to optional at least one argument `id` or `title` to the url

```
http://www.omdbapi.com/?i=[id]&apikey=[yourapikey]
```

or

```
http://www.omdbapi.com/?t=[title]&apikey=[yourapikey]
```

#### This will return a few fields. Here's an example of the first item:

```json
{
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "05 May 2017",
  "Runtime": "136 min",
  "Genre": "Action, Adventure, Comedy, Sci-Fi",
  "Director": "James Gunn",
  "Writer": "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
  "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
  "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  "Language": "English",
  "Country": "USA",
  "Awards": "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  "Ratings": [
    { "Source": "Internet Movie Database", "Value": "7.6/10" },
    { "Source": "Rotten Tomatoes", "Value": "85%" },
    { "Source": "Metacritic", "Value": "67/100" }
  ],
  "Metascore": "67",
  "imdbRating": "7.6",
  "imdbVotes": "583,183",
  "imdbID": "tt3896198",
  "Type": "movie",
  "DVD": "10 Jul 2017",
  "BoxOffice": "$389,813,101",
  "Production": "Marvel Studios, Walt Disney Pictures",
  "Website": "N/A",
  "Response": "True"
}
```

#### You can query a movie, series, episode or Year of release. by providing a `type` or `y` for Year of release to the url.

```
http://www.omdbapi.com/?i=[id]&apikey=[yourapikey]
```

#### To `Get` a plot of a movie you can pass `plot` with argument `short` or `full`. This will Return short or full plot.

```
http://www.omdbapi.com/?i=[id]&plot=[plot]&apikey=[yourapikey]
```

#### To change the return data type you can pass `r` in the url using `json` or `xml` as argument.

```
http://www.omdbapi.com/?i=[id]&r=[return type]&apikey=[yourapikey]
```
