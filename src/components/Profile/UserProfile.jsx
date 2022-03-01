import React from 'react';

import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div>
      <h1>Welcome {user}</h1>
      <Link to="/roulette">
        <button className="border-2 border-sky-500">Find A Game</button>
      </Link>
      <Link to="/library">
        <button className="border-2 border-sky-500">Game Library</button>
      </Link>
    </div>
  );

}
