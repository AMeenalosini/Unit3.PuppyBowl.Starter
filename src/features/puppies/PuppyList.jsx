/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
import { useGetPuppiesQuery } from "./puppySlice";

export default function PuppyList({ setSelectedPuppyId }) {
  const { data: puppies, error, isLoading } = useGetPuppiesQuery();

  console.log("puppies:", puppies);
  console.log("isLoading:", isLoading);
  console.log("error:", error);

  if (error) {
    console.error("Error fetching puppies:", error);
  }

  return (
    <article>
      <h2>Roster</h2>
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {!isLoading && puppies?.data?.players && puppies.data.players.length > 0 && puppies.data.players.map((p) => (
          console.log("puppiesmap:", puppies.data.players),
          <li key={p.id}>
            <h3>{p.name} #{p.id}</h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <button onClick={() => setSelectedPuppyId(p.id)}>See details</button>
          </li>
        ))}
        {!isLoading && (!puppies?.data?.players || puppies.data.players.length === 0) && <li>No puppies found.</li>}
      </ul>
    </article>
  );
}

