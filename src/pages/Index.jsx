import { useDarkMode } from 'context/darkMode';
import React from 'react';
import Cards from '../components/Cards';

const Index = () => {
  const { darkMode } = useDarkMode();
  return (
  	<div>
  	<div className="bg-cover bg-center  h-auto text-white py-40 px-10 object-fill">
       <div className="md:">
        <p className="font-bold text-sm uppercase">Services</p>
        <p className="text-3xl font-bold">Multimedia products</p>
        <p className="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
        <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
        </div>  


    </div>

    <div className="titulo">
    <span>Productos</span>
    </div>

    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<div class="cards">
  <div class="card">
    <img class="card__image" src="https://http2.mlstatic.com/D_NQ_NP_619538-MCO44296941224_122020-W.jpg" alt=""/>
    <div class="card__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
      </p>
      <p>
        Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?
      </p>
    </div>
    <div class="card__info">
      <div>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Agregar al carrito
    </button>
      </div>
      <div>
        <a href="./" class="card__link">Ver articulo </a>
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card__image" src="https://raw.githubusercontent.com/miguelvivas13/Proyecto-MEVN/main/public/img/hombre1.png" alt=""/>
    <div class="card__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
      </p>
      <p>
        Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?
      </p>
    </div>
    <div class="card__info">
      <div>
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Agregar al carrito
    </button>
      </div>
      <div>
        <a href="./" class="card__link">Ver articulo </a>
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card__image" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/19748bd0-5a80-4583-9c3f-e29a24044a58/air-max-270-g-zapatillas-de-golf-qdKfmN.png" alt=""/>
    <div class="card__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
      </p>
      <p>
        Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?
      </p>
    </div>
    <div class="card__info">
      <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Agregar al carrito
    </button>
      </div>
      <div>
        <a href="./" class="card__link">Ver articulo </a>
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card__image" src="https://github.com/miguelvivas13/Proyecto-MEVN/blob/main/public/img/mujer1.png?raw=true" alt=""/>
    <div class="card__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
      </p>
      <p>
        Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?
      </p>
    </div>
    <div class="card__info">
      <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Agregar al carrito
    </button>
      </div>
      <div>
        <a href="./" class="card__link">Ver Articulo</a>
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card__image" src="https://raw.githubusercontent.com/miguelvivas13/Proyecto-MEVN/main/public/img/accesorios1.png" alt=""/>
    <div class="card__content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus id ab tenetur delectus reiciendis fugit autem qui at.
      </p>
      <p>
        Alias itaque praesentium eum, pariatur consequatur ducimus asperiores accusantium velit minima?
      </p>
    </div>
    <div class="card__info">
      <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
        Agregar al carrito
    </button>
      </div>
      <div>
        <a href="./" class="card__link">Ver articulo </a>
      </div>
    </div>
  </div>
</div>


 </div>

  );
};

export default Index;
