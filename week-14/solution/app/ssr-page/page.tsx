/*

import { use } from 'react';

async function fetchData() {
  const res = await fetch('http://localhost:3000/api/data', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default function SSRRoute() {
  const data = use(fetchData());

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl">SSR Route</h1>
      <p className="my-4">
        This page demonstrates server-side rendering by fetching data from a custom backend API endpoint.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <p className="text-xl font-semibold text-blue-600">{data.message}</p>
        <p className="text-sm text-gray-500 mt-2">
          Timestamp: {new Date(data.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

*/