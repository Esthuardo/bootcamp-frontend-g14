import { fetchMovies } from "./services.js";

export const renderMovies = (movies) =>{
    const moviesList = document.querySelector('.movies__list')
    let elementos = ``
    movies.forEach(movie => {
        elementos = elementos + `
            <tr>
                <td>${movie.id}</td>
                <td>
                    <img src='${movie.image || 'https:/>/placehold.co/300x460'}' width="100" height="250">
                </td>
                <td>
                    <strong>${movie.name}</strong>
                    <div class="fs-small">
                        <strong>Release: </strong> ${movie.release}
                    </div>
                    <div class="fs-small">
                        <strong>Genre: </strong> ${movie.genre.name}
                    </div>
                    <div class="fs-small">
                        <strong>Resume: </strong> ${movie.resumen}
                    </div>
                </td>
                <td>
                    <div>
                        <button class="movie__exit">🖊️</button>
                        <button class="movie__remove" data-id="${movie.id}">❌</button>
                    </div>
                </td>
            </tr>
        `
    });
    moviesList.innerHTML= elementos

    const removeButtons = document.querySelectorAll('.movie__remove')

    removeButtons.forEach(button => {
        button.addEventListener('click',async (event)=>{
            const id=event.target.dataset.id
            const res= await deleteMovie(id)

            if (res){
                const movies=await fetchMovies()
                renderMovies(movies)
            }
        })
    });
}
