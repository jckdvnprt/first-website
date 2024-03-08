const myFavouriteFilms = {
    "Action": [
        { title: 'The Matrix', releaseYear: 1999 },
        { title: 'Drunken Master', releaseYear: 1978 },
        { title: 'Mad Max Fury Road', releaseYear: 2015 },
        { title: 'Mean Guns', releaseYear: 1997 },
        { title: 'Cyborg', releaseYear: 1989 },
        { title: 'US Seals II', releaseYear: 2001 }
    ],
    "Sci-fi": [
        { title: 'Star Wars', releaseYear: 1977 },
        { title: 'Speed Racer', releaseYear: 2008 },
        { title: 'Wicked City', releaseYear: 1992 }
    ],
    "Comedy": [
        { title: 'Dirty Work', releaseYear: 1998 },
        { title: 'Hellzapoppin', releaseYear: 1941 },
        { title: 'Duck Soup', releaseYear: 1933 },
        { title: 'Hundreds Of Beavers', releaseYear: 2023 },
        { title: 'Windy City Heat', releaseYear: 2003 },
        { title: 'Metal Detector Maniac', releaseYear: 2021 },
        { title: 'Safety Last', releaseYear: 1923 }


    ],
    "Horror": [
        { title: 'Dracula', releaseYear: 1931 },
        { title: 'Godzilla Vs Hedorah', releaseYear: 1971 },
        { title: 'Slugs', releaseYear: 1988 },
        { title: 'The Exorcist III', releaseYear: 1990 }
    ]
};

function moviePicker(genre, num) {
    if (myFavouriteFilms.hasOwnProperty(genre)) {
        const filmsInGenre = myFavouriteFilms[genre];
        if (!isNaN(num) && num >= 0 && num < filmsInGenre.length) {
            return `${filmsInGenre[num].title} (${filmsInGenre[num].releaseYear})`;
        } else {
            return "Invalid position";
        }
    } else {
        return "Genre not found, silly";
    }
}

document.getElementById('pickBtn').addEventListener('click', function() {
    const genre = document.getElementById('genre').value;
    const position = parseInt(document.getElementById('position').value);
    const resultDiv = document.getElementById('result');
    
    const movie = moviePicker(genre, position);
    resultDiv.textContent = movie;
});
