import {BookTypes} from "@/types/BookTypes";
import Link from "next/link";
import getBookData from "@/lib/getBookData";


export default async function Home() {
    let books: BookTypes[] = [];
    await getBookData().then(data => {
        books = Array.isArray(data.books)? data.books.flat() : [];
    }).catch(e => {
            books = [];
    })

    return (
        <>
            <Link className={"mt-6 text-emerald-600 m-6"} href='/about' >About</Link>
            <div className={"flex flex-wrap justify-center"}>
            {
                books.length > 0 ?
                books.map((book: BookTypes) =>
                 <div key={book.id} className="border-2 border-gray-500 rounded-xl p-2 w-1/4 m-4 ">
                     <h1 className={"text-2xl font-bold text-neutral-700 text-center"}>{book.title}</h1>
                    <img src={book.image} alt={book.title} height={500} width={500}></img>
                     <p className={"text-sky-800 font-medium"}>{book.authors.length > 0 ? book.authors[0].name : "No authors found"}</p>
                     <p className={"text-sky-800 font-medium"}>{book.rating.average}</p>
                 </div>
                ) : <div>
                        <h1 className={"text-2xl font-bold text-neutral-700 text-center"}>Error Loading Books</h1>
                    </div>

            }
            </div>
        </>
    );
}
