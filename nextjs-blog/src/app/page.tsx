import { User } from "lucide-react";
import Image from "next/image";
import nlwlogo from "../assets/nlw-spacetime-logo.svg";

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="relative bg-[url(../assets/bg-stars.svg)] bg-cover flex flex-col itens-start justify-between px-28 py-16 border-r border-white/10">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full "></div>
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {/* perfil */}
        <a
          href=""
          className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors font-alt "
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 text-gray-500" />
          </div>
          <p className="max-w-[140px] text-sm leading-snug">
            {" "}
            <span className="underline "> Crie sua conta </span> e salve suas
            memórias!
          </p>
        </a>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwlogo} alt="nlw spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50"> 
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>

          <a className="inline-block font-bold rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600" href=" ">CADASTRAR SUA LEMBRANÇA</a>
        </div>
      </div>

      {/* right */}
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px] font-sans">
            Você ainda não registrou nenhuma lembrança, comece a{" "}
            <a href="" className="underline hover:text-gray-50">
              {" "}
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
