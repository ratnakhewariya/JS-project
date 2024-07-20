const SEARCH_KEY = 'https://openlibrary.org/search.json?title='

async function searchBooks() {
    try {
        let bookName = prompt('Enter the name of the books: ')

        bookName = bookName.split(' ').join('+')

        //bookName = bookName.replace(' ','+');


        let url = SEARCH_KEY + bookName
        console.log(url)

        //Fetch data  from api 
        let result = await fetch(url);   //fetch url generates promise itself

        //Convert the data into obj format 

        result = await result.json();

        console.log(result.docs[0])

        // author_name first_publish_year first_sentence[0]

        console.log(result.docs[0].author_name[0])
        console.log(result.docs[0].first_publish_year)
        console.log(result.docs[0].first_sentence[0])



        //console.log('finish');

        
        alert (`Author Name: ${result.docs[0].author_name[0]}\nFirst Publish Year: ${result.docs[0].first_publish_year}\nFirst Sentence: ${result.docs[0].first_sentence[0]}`)
    }
    catch (error) {
        console.log(error)
    }

}
