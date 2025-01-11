import { Hero } from "./Hero"


export const Home: React.FC = () => {
     
const imgn= "https://img.freepik.com/vector-premium/fondo-geometrico-negro-diseno-concepto-oscuridad_392592-1901.jpg?w=1380"
// const imgn= "https://static.vecteezy.com/system/resources/previews/004/672/772/non_2x/flash-sale-banner-design-template-offer-shopping-on-dark-blue-background-free-vector.jpg"



    return (
        <div className="flex flex-col items-center min-h-full min-w-full max-w-full max-h-full bg-red-400">
            <Hero  
            title=" 40% Y 50% DE DESCUENTO" 
            imageUrl={imgn}
            />
          
        </div>
    )
}