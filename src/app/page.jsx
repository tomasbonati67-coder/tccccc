"use client"

import { useMemo, useState } from "react"
import { Home, UserRound, Search } from "lucide-react"

const characters = [
  // Personagens normais
  {
    id: 1,
    name: "Isaac",
    variant: "Normal",
    image: "/characters/isaac.png",
  },
  {
    id: 2,
    name: "Magdalene",
    variant: "Normal",
    image: "/characters/magdalene.png",
  },
  {
    id: 3,
    name: "Cain",
    variant: "Normal",
    image: "/characters/cain.png",
  },
  {
    id: 4,
    name: "Judas",
    variant: "Normal",
    image: "/characters/judas.png",
  },
  {
    id: 5,
    name: "???",
    variant: "Normal",
    image: "/characters/blue-baby.png",
  },
  {
    id: 6,
    name: "Eve",
    variant: "Normal",
    image: "/characters/eve.png",
  },
  {
    id: 7,
    name: "Samson",
    variant: "Normal",
    image: "/characters/samson.png",
  },
  {
    id: 8,
    name: "Azazel",
    variant: "Normal",
    image: "/characters/azazel.png",
  },
  {
    id: 9,
    name: "Lazarus",
    variant: "Normal",
    image: "/characters/lazarus.png",
  },
  {
    id: 10,
    name: "Eden",
    variant: "Normal",
    image: "/characters/eden.png",
  },
  {
    id: 11,
    name: "The Lost",
    variant: "Normal",
    image: "/characters/the-lost.png",
  },
  {
    id: 12,
    name: "Lilith",
    variant: "Normal",
    image: "/characters/lilith.png",
  },
  {
    id: 13,
    name: "Keeper",
    variant: "Normal",
    image: "/characters/keeper.png",
  },
  {
    id: 14,
    name: "Apollyon",
    variant: "Normal",
    image: "/characters/apollyon.png",
  },
  {
    id: 15,
    name: "The Forgotten",
    variant: "Normal",
    image: "/characters/the-forgotten.png",
  },
  {
    id: 16,
    name: "Bethany",
    variant: "Normal",
    image: "/characters/bethany.png",
  },
  {
    id: 17,
    name: "Jacob & Esau",
    variant: "Normal",
    image: "/characters/jacob-and-esau.png",
  },

  // Personagens Tainted
  {
    id: 18,
    name: "Tainted Isaac",
    variant: "Tainted",
    image: "/characters/tainted-isaac.png",
  },
  {
    id: 19,
    name: "Tainted Magdalene",
    variant: "Tainted",
    image: "/characters/tainted-magdalene.png",
  },
  {
    id: 20,
    name: "Tainted Cain",
    variant: "Tainted",
    image: "/characters/tainted-cain.png",
  },
  {
    id: 21,
    name: "Tainted Judas",
    variant: "Tainted",
    image: "/characters/tainted-judas.png",
  },
  {
    id: 22,
    name: "Tainted ???",
    variant: "Tainted",
    image: "/characters/tainted-blue-baby.png",
  },
  {
    id: 23,
    name: "Tainted Eve",
    variant: "Tainted",
    image: "/characters/tainted-eve.png",
  },
  {
    id: 24,
    name: "Tainted Samson",
    variant: "Tainted",
    image: "/characters/tainted-samson.png",
  },
  {
    id: 25,
    name: "Tainted Azazel",
    variant: "Tainted",
    image: "/characters/tainted-azazel.png",
  },
  {
    id: 26,
    name: "Tainted Lazarus",
    variant: "Tainted",
    image: "/characters/tainted-lazarus.png",
  },
  {
    id: 27,
    name: "Tainted Eden",
    variant: "Tainted",
    image: "/characters/tainted-eden.png",
  },
  {
    id: 28,
    name: "Tainted Lost",
    variant: "Tainted",
    image: "/characters/tainted-lost.png",
  },
  {
    id: 29,
    name: "Tainted Lilith",
    variant: "Tainted",
    image: "/characters/tainted-lilith.png",
  },
  {
    id: 30,
    name: "Tainted Keeper",
    variant: "Tainted",
    image: "/characters/tainted-keeper.png",
  },
  {
    id: 31,
    name: "Tainted Apollyon",
    variant: "Tainted",
    image: "/characters/tainted-apollyon.png",
  },
  {
    id: 32,
    name: "Tainted Forgotten",
    variant: "Tainted",
    image: "/characters/tainted-forgotten.png",
  },
  {
    id: 33,
    name: "Tainted Bethany",
    variant: "Tainted",
    image: "/characters/tainted-bethany.png",
  },
  {
    id: 34,
    name: "Tainted Jacob",
    variant: "Tainted",
    image: "/characters/tainted-jacob.png",
  },
]

export default function HomePage() {
  const [search, setSearch] = useState("")
  const [variant, setVariant] = useState("all")

  // Cria a lista de variantes automaticamente
  const variants = useMemo(() => {
    return [...new Set(characters.map((character) => character.variant))]
  }, [])

  // Filtra os personagens
  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const searchTerm = search.toLowerCase()

      const matchesSearch =
        character.name.toLowerCase().includes(searchTerm)

      const matchesVariant =
        variant === "all" ||
        character.variant === variant

      return matchesSearch && matchesVariant
    })
  }, [search, variant])

  return (
    <main className="min-h-screen bg-[#f1f3f5] px-6 py-5">

      <div className="mx-auto min-h-[700px] max-w-[1100px] bg-white px-6 py-5">

        {/* Header */}
        <header className="flex items-center justify-end gap-4">

          <button
            type="button"
            aria-label="Início"
            className="text-gray-500 transition hover:text-gray-900"
          >
            <Home size={16} />
          </button>

          <button
            type="button"
            aria-label="Perfil"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition hover:bg-gray-300"
          >
            <UserRound size={18} />
          </button>

        </header>


        {/* Filtros */}
        <div className="mt-6 flex flex-col gap-4">

          {/* Busca */}
          <div className="flex flex-col gap-1">

            <label
              htmlFor="character-search"
              className="text-[10px] font-medium text-gray-500"
            >
              Search
            </label>

            <div className="relative w-full max-w-[220px]">

              <input
                id="character-search"
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Enter search terms"
                className="h-7 w-full rounded-sm border border-gray-300 bg-white px-2 pr-8 text-[10px] outline-none transition placeholder:text-gray-400 focus:border-gray-500"
              />

              <Search
                size={12}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
              />

            </div>

          </div>


          {/* Variante */}
          <div className="flex flex-col gap-1">

            <label
              htmlFor="character-variant"
              className="text-[10px] font-medium text-gray-500"
            >
              Variant
            </label>

            <select
              id="character-variant"
              value={variant}
              onChange={(event) => setVariant(event.target.value)}
              className="h-7 w-[140px] rounded-sm border border-gray-300 bg-white px-2 text-[10px] text-gray-600 outline-none focus:border-gray-500"
            >

              <option value="all">
                All characters
              </option>

              {variants.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}

            </select>

          </div>

        </div>


        {/* Lista de personagens */}
        <section className="mt-7 flex flex-col gap-8">

          {filteredCharacters.map((character) => (

            <article
              key={character.id}
              className="flex gap-4"
            >

              {/* Imagem do personagem */}
              <div className="h-[72px] w-[118px] shrink-0 overflow-hidden border border-gray-400 bg-gray-100">

                <img
                  src={character.image}
                  alt={character.name}
                  className="h-full w-full object-cover"
                />

              </div>


              {/* Informações */}
              <div className="flex min-w-0 flex-1 flex-col justify-center">

                <h2 className="mb-2 text-sm font-semibold text-gray-900">
                  {character.name}
                </h2>

                <p className="border-t border-gray-300 pt-1 text-xs text-gray-500">
                  ID: {character.id} · {character.variant}
                </p>

                <div className="mt-1 border-t border-gray-300" />

              </div>

            </article>

          ))}


          {/* Nenhum personagem encontrado */}
          {filteredCharacters.length === 0 && (

            <div className="py-10 text-center text-sm text-gray-500">
              Nenhum personagem encontrado.
            </div>

          )}

        </section>

      </div>

    </main>
  )
}