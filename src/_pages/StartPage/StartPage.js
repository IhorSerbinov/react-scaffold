import React from 'react';
import useKitty from '_hooks/useKitty';

function StartPage () {
  const { kitties, getKitty} = useKitty();
  return (
    <div className='kitty__wrapper'>
        <img src={kitties[0].url} alt='Kitty'/>
        <button type='button' onClick={() => getKitty()}>Get Kitty</button>
    </div>
  );
};

export default StartPage;
