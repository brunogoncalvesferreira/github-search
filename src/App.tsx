import { FormEvent,  useState } from "react";
import { Card, CardProps } from "./components/Card";
import { Header } from "./components/Header";
import {  Search } from 'lucide-react'

export function App() {
  const [user, setUser] = useState<CardProps[]>([])
  const [search, setSearch] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  async function fecthUser() {
    
    if(search === '') {
      return alert('Preencha o campo para realizar a busca')
    }

    const response = await fetch(`https://api.github.com/users/${search}`)
    const data = await response.json()
    
    const newUser = {
      name: data.name,
      bio: data.bio,
      avatar: data.avatar_url,
      followers: data.followers,
      following: data.following
    }

    setUser([newUser])
    setSearch('')
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="w-[40rem] bg-zinc-800 rounded-md overflow-hidden pb-6">
        <Header/>

        <main>
          <form onSubmit={handleSubmit} className="px-4 -mt-6">
            <div className="flex items-center gap-2">
              <input 
                className="w-full h-12 bg-zinc-700 text-zinc-100 px-4 rounded-md" 
                type="text" 
                placeholder="Buscar um usuário"
                onChange={e => setSearch(e.target.value)}
                value={search}
              />
             <button 
              type="submit" 
              onClick={fecthUser} 
              className="w-12 h-12 bg-zinc-700 flex items-center justify-center rounded-md hover:bg-zinc-600">
                <Search className=" text-zinc-100"/>
            </button>
            </div>
          </form>

          <div className="h-[1px] bg-zinc-700 mt-10"></div>

          {user.length === 0 && (
            <p className="mt-10 text-center text-zinc-400">Nenhum usuário encontrado</p>
          )}

           {user.map((user, index) => {
            return (
              <Card 
              key={index}
              name={user.name}
              bio={user.bio}
              avatar={user.avatar}
              followers={user.followers}
              following={user.following}
            />
            )
           })}
        </main>
      </div>
    </div>
  )
}