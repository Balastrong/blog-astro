import { getOramaDB, search as searchOrama } from '@orama/plugin-astro/client';
import React, { useState } from 'react';

// <OramaSearch client:load />
export const OramaSearch = () => {
  const [result, setResult] = useState<any | undefined>(undefined);

  const search = async (searchTerm: string) => {
    try {
      const db = await getOramaDB('articles');

      const res = await searchOrama(db, { term: searchTerm });
      console.log(res);
      setResult(res);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Orama Search</h1>
      <input type="text" onChange={(e) => search(e.target.value)} />
      <p>Search Results: {JSON.stringify(result)}</p>
    </div>
  );
};

export default OramaSearch;
