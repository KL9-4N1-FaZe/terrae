import Image from "next/image";
import Navbar from "@/components/Navbar";
import Bannerone from "@/components/Bannerone";
import Bannerone2 from "@/components/Bannerone2";
import Info from "@/components/Info";

export default function Home() {
  return (
   <>
       <Navbar/>
      
       <Bannerone 
        titolo={<> Dalla terra alla tua tavola.<br></br> Buono per te, giusto per chi produce.</>}
        descrizione="Il primo food delivery etico a filiera corta. Sostieni l'agricoltura locale e ricevi a casa il meglio della tua regione, nel rispetto della stagionalità."
      />

      <div className="w-full py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6">
          <Info icona="images/3.png" titolo="Prodotti tipici della tua regione" descrizione="Prodotti freschi e di stagione preparati con cura" />
          <Info icona="images/1.png" titolo="scopri la nuova funzione quando è disponibile" descrizione="Quando è disponbile è una nuova funzione di prenotazione su prodtti che richiedono molto tempo questa funzione ti notifica quando il prodotto è pronto" />
          <Info icona="images/2.png" titolo="Consegne Lampo!!" descrizione="Raccolto stamattina e in giornata davanti alla porta della tua abitazione" />
        </div>
      </div>

     <Bannerone2 
        titolo1="SCopri cosà il tuo territorio per te"
        descrizione="SIamo gia in tutta italia"
        bottone="fai richiesta da adesso"
      />

   </>
  );
}
