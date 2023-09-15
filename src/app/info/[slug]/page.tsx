import Image from "next/image";


export async function generateStaticParams(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const { results: pokemons } = await response.json();
  return pokemons.map((pokemon: any) => ({slug: pokemons.name}));
}

export default async function InfoDetails({ params, } : { params: {slug: string};}){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.slug}`);
    const pokemon = await response.json();
    return (
        <div className="flex items-center">
            <Image
                src={pokemon.sprites.front_shiny}
                width={80}
                height={80}
                alt={pokemon.name}
            />
            <h2 className="text-2xl mb-4 font-bold">{pokemon.name}</h2>
        </div>
    )
} 



