import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const { results: pokemons } = await response.json();

  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Pokemons</h2>
      <div className="flex flex-wrap gap-3">
        {pokemons.map((pokemon: any) => (
          <Link className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800-30"
          href={`/info/${pokemon.name}`}
          key={pokemon.name} 
          >
            {pokemon.name}
          </Link>  
        ))}
      </div>
    </div>
  )
}
