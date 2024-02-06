import { Users, UserCheck } from "lucide-react";

export interface CardProps {
  name: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
}

export function Card({name, bio, avatar, followers, following} : CardProps) {
  return (
    <div className="mt-6 flex">
        <div className="p-4 w-36">
          <img 
            className="w-full object-cover rounded-md"
            src={avatar}
            alt="Foto de perfil do Github" 
          />
        </div>

        <div className="flex-1 p-4">
            <div>
              <strong className="text-xl text-zinc-100">{name}</strong>
              <p className="text-sm text-zinc-500 mt-1">{bio}</p>
            </div>
            <div className="flex gap-6 mt-6">
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                <Users/> Seguidores {followers}
              </p>
              <p className="flex items-center gap-1 text-sm text-zinc-500">
                <UserCheck/> Seguindo {following}
              </p>
            </div>
        </div>
      </div>
  )
}