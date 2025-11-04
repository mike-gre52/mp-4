const API_KEY = process.env.API_KEY;
// https://api.bigbookapi.com/search-books?query=books+about+wizards&api-key={API_KEY}
export default async function getData() {
   const res = await fetch(`https://api.bigbookapi.com/search-books?api-key=${API_KEY}&genres=action`);
   return res.json();
}