import Movies from "@/components/Movies";

export default async function Home({ searchParams }) {
 
  const genre = searchParams.genre;

  const apiKey = process.env.API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre ? "movie/" + genre : "trending/all/day"
    }?api_key=${apiKey}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();

  console.log(data);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt} />
      ))}
    </div>
  );
}
