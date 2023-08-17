import { notFound } from "next/navigation";

interface ProfileProps {
  "params": {
    "id": string
  }
}

var names = ['ryandvl'];

export default function Lobby({ params }: ProfileProps) {
  // if(!names.includes(params.username)) notFound();

  return (
    <div className="h-screen">
      <div>
        <h1>Lobby ID: {params.id}</h1>
      </div>
    </div>
  )
}