import React from 'react';

const HomePage = props => {
  return (
    <main className='holder'>
      <div className='homeimg'>
        <img
          src='img/home/img01.jpg'
          alt='Avion'
        />
      </div>
      <div className='columnas'>
        <div className='bienvenidos'>
          <h2>Bienvenidos</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            quae qui dolore natus vero, ea dicta aliquid nisi itaque,
            dignissimos eius veniam unde obcaecati? Consectetur, cumque!
            Excepturi nisi similique animi!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            quae qui dolore natus vero, ea dicta aliquid nisi itaque,
            dignissimos eius veniam unde obcaecati? Consectetur, cumque!
            Excepturi nisi similique animi!
          </p>
        </div>
        <div className='testimonios'>
          <h2>Testimonios</h2>
          <div className='testimonio'>
            <span className='cita'>Simplemente Excelente</span>
            <span className='autor'>Juan Perez - zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
