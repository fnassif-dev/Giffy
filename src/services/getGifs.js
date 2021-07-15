export const getGifs = ( { keyword = 'Saint Seiya'} = {} ) => {
    const apiUrl = `${process.env.REACT_APP_API_SEARCH_URL}?api_key=${process.env.REACT_APP_API_TOKEN}&q=${keyword}&limit=12&offset=0&rating=G&lang=en`
    
    return fetch(apiUrl)
        .then( res => res.json())
        .then( response => {
            const { data = [] } = response;

            if (Array.isArray(data)) {
                const gifs = data.map( image => {
                    const { id, title, images } = image;
                    const { url } = images.downsized_medium;

                    return { id, title, url }
                })

                return gifs;
            }
        });
}