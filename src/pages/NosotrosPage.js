import React from 'react';

const NosotrosPage = props => {
  return (
    <main className='holder'>
      <div className='historia'>
        <h2>Historia</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ullam nulla laudantium molestias aut tempora eum perferendis provident
          enim cumque, ea tenetur soluta velit culpa! Magnam non porro culpa
          nulla!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          aspernatur vero sit maxime modi corporis minima molestias rerum eaque
          tenetur ea reiciendis voluptas blanditiis, quam, nemo, quo veniam
          inventore molestiae!
        </p>
      </div>
      <div className='staff'>
        <h2>Staff</h2>
        <div className='personas'>
          <div className='persona'>
            <img
              src='img/nosotros/nosotros1.jpg'
              alt='Juan Gomez'
            />
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quaerat dignissimos qui, quia impedit fuga nisi ipsam excepturi
              officiis. Molestiae quis ipsum minus, fugit ullam nam nesciunt
              reprehenderit repudiandae voluptatum!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
