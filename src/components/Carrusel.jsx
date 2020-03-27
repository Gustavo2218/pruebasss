import React from 'react';
import '../assets/style/Carrusel.scss';
const carousel = () => {
    return (
        <carousel className="carousel">
        <h3 class="categories__title">RESTAURANTES PREHISPANICOS</h3>
        <section class="carousel">
          <div class="carousel__container">
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://images.otstatic.com/prod/26720401/1/huge.jpg" alt=""  />
              <div class="carousel-item__details">
                <p class="carousel-item__details--title">La gruta de Teotihuacan.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://mxcity.mx/wp-content/uploads/2015/05/La-Zaranda-Miravalle-mx-city.png" alt=""  />
              <div class="carousel-item__details">
                <div>
                </div>
                <p class="carousel-item__details--title">Zaranda.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://media-cdn.tripadvisor.com/media/photo-s/18/47/76/ef/photo3jpg.jpg" alt=""  />
              <div class="carousel-item__details">
                <p class="carousel-item__details--title">Cuatecomatec.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://revistaculturbal.files.wordpress.com/2013/08/1.jpg?w=470&h=312" alt=""  />
              <div class="carousel-item__details">
                <div>
                <p class="carousel-item__details--title">Fonda Don Chon.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://mxcity.mx/wp-content/uploads/2020/02/Suuwaii-comida-japonesa-condesa-3.jpg" alt=""  />
              <div class="carousel-item__details">
              <div>
              <p class="carousel-item__details--title">Restaurante Tipico Toluca.</p>
              </div>
              </div>
            </div>

            <div class="carousel-item">
              <img class="carousel-item__img" src="https://www.xcaret.com/img/thumbs/es/gastronomia/la-laguna-thumb.jpg" alt=""  />
              <div class="carousel-item__details">
              <div>
              <p class="carousel-item__details--title">Tipicos.</p>
              </div>
              </div>
            </div>



          </div>
        </section>


        <h3 class="categories__title">PLATILLOS PREHISPANICOS</h3>
        <section class="carousel">
          <div class="carousel__container">
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/12/recetas-prehispanicas-maiz.jpg" alt=""  />
              <div class="carousel-item__details">
                <p class="carousel-item__details--title">Tradicion y Sabores.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/pozole-rapido.jpg" alt=""  />
              <div class="carousel-item__details">
                <div>
                </div>
                <p class="carousel-item__details--title">Platillos Tipico Mexicano.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/05/que-son-los-tlacoyos-y-como-se-hacen.jpg" alt=""  />
              <div class="carousel-item__details">
                <p class="carousel-item__details--title">Tlacoyos.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://www.angelopolis.com/wp-content/uploads/2015/08/Mole-Poblano.jpg" alt=""  />
              <div class="carousel-item__details">
                <div>
                <p class="carousel-item__details--title">Mole Poblano.</p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://www.lifeder.com/wp-content/uploads/2019/05/comida-mexicana-1280x720.jpg" alt=""  />
              <div class="carousel-item__details">
              <div>
              <p class="carousel-item__details--title">Tacos el Mejor Sabor.</p>
              </div>
              </div>
            </div>

            <div class="carousel-item">
              <img class="carousel-item__img" src="https://imagenescityexpress.scdn6.secure.raxcdn.com/sites/default/files/2017-08/gastronomia-guanajuato-1.jpg" alt=""  />
              <div class="carousel-item__details">
              <div>
              <p class="carousel-item__details--title">Enchiladas Tipicas guanajuato.</p>
              </div>
              </div>
            </div>

            <div class="carousel-item">
              <img class="carousel-item__img" src="https://paolarojas.com.mx/wp-content/uploads/2018/01/calori%CC%81as-de-tamales.jpg" alt=""  />
              <div class="carousel-item__details">
                <div>
                <p class="carousel-item__details--title">Tamales.</p>
                </div>
                </div>
                </div>
            <div class="carousel-item">
              <img class="carousel-item__img" src="https://imparcialoaxaca.mx/wp-content/uploads/2018/06/chicatanas.jpg" alt=""  />
              <div class="carousel-item__details">
                <div>
                <p class="carousel-item__details--title">Chicatanas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
</carousel>
  );
}

export default carousel;
