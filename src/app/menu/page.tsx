import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <div>
      <h1>Nueva Ruta</h1>
      <Link href="/menu/add-entry">
        <button data-cy="btn--add-entry">agregar</button>
      </Link>
      <Link href="/">
        <button data-cy="btn--menu-return">voltar</button>
      </Link>
    </div>
  );
};

export default Menu;
