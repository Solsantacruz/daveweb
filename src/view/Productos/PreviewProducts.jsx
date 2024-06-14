import Nike from '../../assets/marcas/nike.webp';
import Adidas from '../../assets/marcas/adidas.png';
import Puma from '../../assets/marcas/puma.jpg';
import Vans from '../../assets/marcas/vans.avif';


const PreviewProducts = () => {

    const ProductsData = [
        {
          id: 1,
          img: Nike,
          title: "Women Ethnic",
          rating: 5.0,
          color: "white",
          aosDelay: "0",
        },
        {
          id: 2,
          img: Adidas,
          title: "Women western",
          rating: 4.5,
          color: "Red",
          aosDelay: "200",
        },
        {
          id: 3,
          img: Puma,
          title: "Goggles",
          rating: 4.7,
          color: "brown",
          aosDelay: "400",
        },
        {
          id: 4,
          img: Vans,
          title: "Printed T-Shirt",
          rating: 4.4,
          color: "Yellow",
          aosDelay: "600",
        },
      ];

    return (
        <div className=" w-full mx-auto rounded-lg bg-gray-50">
            <div className="">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-5 sm:mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 pt-5 ">Productos</h1>
                <p className="text-sm text-gray-700 mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates veniam impedit natus nobis hic odit consectetur at! Odio facilis, ducimus accusamus, rerum incidunt exercitationem, officiis omnis fuga fugiat temporibus ut?</p>
                </div>
                {/* body section*/}
                <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-5 sm:mx-2">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-5 my-5"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[200px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center my-5 pb-5">
          <button class="group relative h-12 w-48 overflow-hidden rounded-2xl bg-black text-lg font-bold text-lime ">
   Ver Productos
   <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
            </button>
            
          </div>
                </div>
            </div>
        </div>
    )


}

export default PreviewProducts;