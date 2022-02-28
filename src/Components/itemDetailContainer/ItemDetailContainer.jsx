import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import {HarryPotter1, HarryPotter2, HarryPotter3, HarryPotter4, HarryPotter5, HarryPotter6, HarryPotter7} from '../../img/Books/HarryPotter';
import {Narnia1, Narnia2, Narnia3, Narnia4, Narnia5, Narnia6, Narnia7} from '../../img/Books/Narnia';
import {HungerGames1, HungerGames2, HungerGames3, HungerGames4} from '../../img/Books/HungerGames';
import { useParams } from 'react-router-dom'


const categories = {
  infantil: 'infantil',
  fantasia: 'fantasia',
  accion: 'accion'
}

const DbBooks = [
  {
    id : "01",
    name: "Harry Potter y la piedra fisolofal",
    description: "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero, sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago!",
    img: HarryPotter1,
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    price: 2300,
    currency: "$",
    stock: 5
  },
  {
    id : "02",
    name: "Harry potter y la cámara secreta",
    description: "Mientras Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería, un elfo aparece en su habitación y le advierte de que una amenaza mortal se cierne sobre la escuela. Harry no se lo piensa dos veces y, acompañado de Ron, se dirige a Hogwarts en un coche volador. Pero, ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario.",
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    img: HarryPotter2,
    price: 2300,
    currency: "$",
    stock: 7
  },
  {
    id : "03",
    name: "Harry potter y el prisionero de azkaban",
    description: "Harry aguarda con impaciencia el inicio del tercer curso en el Colegio Hogwarts de Magia y Hechicería. Tras haber cumplido trece años, solo y lejos de sus amigos de Hogwarts, Harry se pelea con su bigotuda tía Marge, a la que convierte en globo, y debe huir en un autobús mágico. Mientras tanto, de la prisión de Azkaban se ha escapado un terrible villano, Sirius Black, un asesino en serie con poderes mágicos que fue cómplice de lord Voldemort y que parece dispuesto a eliminar a Harry del mapa. Y por si esto fuera poco, Harry debe enfrentarse también a unos terribles monstruos, los dementores, seres abominables capaces de robarles la felicidad a los magos y de borrar todo recuerdo hermoso de aquellos que osan mirarlos. Lo que ninguno de estos malvados personajes sabe es que Harry, con la ayuda de sus fieles amigos Ron y Hermione, es capaz de todo y mucho más.",
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    img: HarryPotter3,
    price: 2300,
    currency: "$",
    stock: 3
  },
  {
    id : "04",
    name: "Harry potter y el cáliz de fuego",
    description: "Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara.",
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    img: HarryPotter4,
    price: 3900,
    currency: "$",
    stock: 2
  },
  {
    id : "05",
    name: "Harry potter y la orden del fénix",
    description: "Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo.",
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    img: HarryPotter5,
    price: 4500,
    currency: "$",
    stock: 8
  },
  {
    id : "06",
    name: "Harry potter y el misterio del príncipe",
    description: "Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de quidditch, los ensayos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: «El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida.» El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con un viejo libro de pociones perteneciente a un misterioso personaje, alguien que se hace llamar Príncipe Mestizo.",
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    img: HarryPotter6,
    price: 2900,
    currency: "$",
    stock: 4
  },
  {
    id : "07",
    name: "Harry potter y las reliquias de la muerte",
    description: "La fecha crucial se acerca. Cuando cumpla los diecisiete, Harry perderá el encantamiento protector que lo mantiene a salvo. El anunciado combate a muerte con Voldemort es inminente, y la casi imposible misión de encontrar y destruir los Horrocruxes restantes es más urgente que nunca. Ha llegado el momento de tomar las decisiones más difíciles. Harry debe abandonar la calidez y seguridad de La Madriguera para emprender sin miedo ni vacilaciones el inexorable sendero trazado para él. Consciente de lo mucho que está en juego, solo dentro de sí mismo encontrará la fuerza que lo impulsará en la vertiginosa carrera hacia un destino desconocido.",
    writer: "Rowling, J. K.",
    category: categories.fantasia,
    img: HarryPotter7,
    price: 3900,
    currency: "$",
    stock: 5
  },
  {
    id : "08",
    name: "El león, la bruja y el armario",
    description: "Cuatro niños descubren un armario que les sirve de puerta de acceso a Narnia, un país congelado en un invierno eterno y sin Navidad. Entonces, cumpliendo con las viejas profecías, los niños (junto con el león Aslan) serán encargados de liberar al reino de la tiranía de la Bruja Blanca(Reina Jadis como se presenta mejor en el libro El Sobrino del Mago) y recuperar el verano, la luz y la alegría para todos los habitantes de Narnia.",
    writer: "C. S. Lewis",
    category: categories.infantil,
    img: Narnia1,
    price: 2100,
    currency: "$",
    stock: 1
  },
  {
    id : "09",
    name: "El príncipe Caspian",
    description: "Un príncipe, al que se le ha negado el trono (que es legítimamente suyo), reúne un ejército en un intento desesperado de librar a su país de un rey desleal. Pero al final, es un combate de honor entre dos hombres solos lo que decidirá el destino de todo un mundo.",
    writer: "C. S. Lewis",
    category: categories.infantil,
    img: Narnia2,
    price: 2200,
    currency: "$",
    stock: 10
  },
  {
    id : "10",
    name: "La travesía del Viajero del Alba",
    description: "Un rey y unos inesperados compañeros de viaje emprenden una travesía que los llevará más allá de toda tierra conocida. A medida que navegan por mares que no aparecen en los mapas, descubren que su misión es más arriesgada de lo que habían imaginado, y que el fin del mundo es, en realidad, el umbral de una tierra incógnita.",
    img: Narnia3,
    writer: "C. S. Lewis",
    category: categories.infantil,
    price: 1500,
    currency: "$",
    stock: 3
  },
  {
    id : "11",
    name: "La silla de plata",
    description: "A través de peligros inauditos, y cavernas profundas y oscuras, marcha una noble banda de amigos al rescate de un príncipe cautivo. Sin embargo, su misión en las Tierras Inferiores los lleva a enfrentarse cara a cara con una maldad más hermosa y letal de lo que habrían esperado encontrar jamás.",
    writer: "C. S. Lewis",
    category: categories.infantil,
    img: Narnia4,
    price: 2500,
    currency: "$",
    stock: 2
  },
  {
    id : "12",
    name: "El caballo y el muchacho",
    description: "Dos fugitivos se encuentran en un viaje desesperado y, con la ayuda de Aslan, unen sus fuerzas no solo para huir, sino también para evitar la conspiración que pretende arrebatar el país y los territorios circundantes al rey de Archenland. Pero una batalla terrible decidirá su destino y también el de Narnia.",
    writer: "C. S. Lewis",
    category: categories.infantil,
    img: Narnia5,
    price: 2200,
    currency: "$",
    stock: 3
  },
  {
    id : "13",
    name: "El sobrino del mago",
    description: "Dos amigos, víctimas del poder de unos anillos mágicos, son arrojados a otro mundo en el que una malvada hechicera intenta convertirlos en sus esclavos. Pero entonces aparece Aslan, y con su canción va hilando el tejido de un nuevo mundo que recibirá el nombre de Narnia.",
    writer: "C. S. Lewis",
    category: categories.infantil,
    img: Narnia6,
    price: 2100,
    currency: "$",
    stock: 15
  },
  {
    id : "14",
    name: "La última batalla",
    description: "Durante los últimos días de Narnia, el país se enfrenta a su desafío más cruel; no se trata de un invasor externo, sino de un enemigo interno. Mentiras y traición han echado raíces, y únicamente el rey y un grupo reducido de seguidores leales pueden impedir la destrucción de todo.",
    writer: "C. S. Lewis",
    category: categories.infantil,
    img: Narnia7,
    price: 2500,
    currency: "$",
    stock: 5
  },
  {
    id : "15",
    name: "Los juegos del hambre",
    description: "Katniss Everdeen, una chica de 16 años del Distrito 12, se ofrece voluntaria para los Septuagésimo Cuartos Juegos del Hambre ocupando el lugar de su hermana menor, Primrose. El varón del Distrito 12 seleccionado resulta ser Peeta Mellark. Cinna, el estilista de Katniss, la convierte en la chica en llamas, consiguiendo la atención de los patrocinadores, vitales para lograr sobrevivir a los juegos. Katniss y Peeta lucharán contra los otros tributos en conjunto, fingiendo que se aman para ganar el favor del público.",
    writer: "Suzanne Collins",
    category: categories.accion,
    img: HungerGames1,
    price: 1900,
    currency: "$",
    stock: 2
  },
  {
    id : "16",
    name: "En llamas",
    description: "Tras el desafío de Katniss durante los Septuagésimo Cuartos Juegos del Hambre, los distritos comienzan a rebelarse, lo que provoca la ira del Capitolio contra Katniss. El presidente Snow ordena a Katniss que convenza a los distritos de que nada de lo que hizo fue por luchar contra el Capitolio, sino por amor a Peeta. Sin embargo, sus intentos de continuar fingiendo que está enamorada de su compañero no calman a los distritos. Como una medida para controlar la situación, ella y Peeta se ven obligados a competir en los Septuagésimo Quintos juegos del hambre con anteriores vencedores de los juegos con la intención de matar a Katniss y Peeta y a la rebelión de Panem contra el capitolio. Entre ellos se encuentran Finnick Odair, Johanna Mason y muchos más. Katniss deberá decidir en qué lado quiere estar: en el lado del amor (Peeta) o en el lado de la guerra (Snow).",
    writer: "Suzanne Collins",
    category: categories.accion,
    img: HungerGames2,
    price: 2000,
    currency: "$",
    stock: 4
  },
  {
    id : "17",
    name: "Sinsajo",
    description: "Es el tercer y penúltimo libro, que gira en torno a Katniss y la rebelión de los distritos contra el Capitolio. Katniss, ahora refugiada en el Distrito 13, y bastante deteriorada de sus experiencias, es utilizada por los rebeldes como una herramienta de propaganda para unir a los distritos en el levantamiento contra el Capitolio y el presidente Snow. Peeta y los otros que fueron capturados por el Capitolio son rescatados. Por último, un grupo que incluye a Katniss, Gale, y al todavía algo inestable Peeta, viajan al Capitolio en una misión para asesinar al Presidente Snow.",
    writer: "Suzanne Collins",
    category: categories.accion,
    img: HungerGames3,
    price: 2000,
    currency: "$",
    stock: 6
  },
  {
    id : "18",
    name: "Balada de pájaros cantores y serpientes",
    description: 'Situado 64 años antes de los eventos en Los Juegos del Hambre, cuenta la historia de "los días oscuros" en Panem. Suzanne Collins ha dicho que se explora la historia 10 años después del fin de la guerra, donde la gente de Panem trata de levantarse y acostumbrarse a la nueva realidad en la que viven.',
    writer: "Suzanne Collins",
    category: categories.accion,
    img: HungerGames4,
    price: 2100,
    currency: "$",
    stock: 9
  },
]

function Get(id){
  return new Promise( (resolve) => { 
    setTimeout( () => { 
      let book = DbBooks.find( (book) => {
        return book.id === id
      })
      resolve(book);
    }, 2000) 
  });
}

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [books, setItem] = useState([]);

  useEffect( () => {
    let getBooks = Get(id);

    getBooks
      .then((books) => { 
        setItem(books) 
      })
      .catch( (error) => { 
        console.error(error) 
      });
    },
    [id]
  );

  return (
    <>
      <div className='row'>
        <ItemDetail book={books}/>
      </div>
    </>
  )};

export default ItemDetailContainer;