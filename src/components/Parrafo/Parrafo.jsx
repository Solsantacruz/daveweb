



const Parrafo = () => {



    return(
        <div className="">
            <div className="flex justify-center items-center mt-16">
                <h1 className="text-3xl lg:text-5xl font-bold font-serif border-b-2 border-lime">Camina con estilo</h1>
            </div>
            <div className="flex justify-center items-center">
                <h3 className="text-lg lg:text-2xl mt-5">Entra a nuestro catalogo y elige lo que mas te gusta. </h3>
            </div>
            <div className="flex justify-center mt-5 mb-10">
            <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-lime text-lg font-bold text-gray-700">
   Ver Productos
    <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-black/20"></div>
  </button>
  </div>
        </div>
    )
}


export default Parrafo;