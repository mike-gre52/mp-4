const BOOK_API_KEY = process.env.BOOK_API_KEY;
// https://api.bigbookapi.com/search-books?query=books+about+wizards&api-key={API_KEY}
export default async function getBookData() {
   const response = await fetch(`https://api.bigbookapi.com/search-books?api-key=${BOOK_API_KEY}&genres=action`);
   return response.json();
}