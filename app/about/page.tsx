
import Link from "next/link";

export default async function About() {

    return (
        <>
            <div className="flex items-center justify-center p-5">
                <div className="w-1/2">
                    <h1 className={"text-5xl font-bold text-cadetblue-500 mb-6"}>About page</h1>

                    <h2 className="text-3xl font-semibold text-gray-700 mb-4">Benefits of Reading</h2>

                    <h3 className="text-2xl font-semibold mb-2">Creativity</h3>
                    <p>Reading books can provide a unique opportunity to think creatively and explore ideas and cultures from around the world. Authors develop interesting characters and engaging stores that let your imagination run.</p>

                    <h3 className="text-2xl font-semibold mb-2">Grow Vocabulary</h3>
                    <p>Reading leads you to growing your vocabulary as you are exposed to new words. This will improve writing as well as speaking abilities</p>

                    <h3 className="text-2xl font-semibold mb-2">Professional Gains</h3>
                    <p>Reading can stimulate the brain, allowing people to have better focus concentration and critical thinking. This can all be beneficial for careers and personal improvements</p>

                    <Link className={"mt-6 text-emerald-600"} href='/' >Explore the API</Link>
                </div>
            </div>
        </>
    );
}

      