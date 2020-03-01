import { NextPage } from 'next';
import React, {useState} from 'react';

interface Degree {
  c: string;
  f: string;
}

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
  const [count, setCount] = useState(0);

  const [temp, updateTemp] = useState<Degree>({ f: "0", c: "0" })

  const updateC = (ev: React.ChangeEvent<HTMLInputElement>) => updateTemp({
    c: Number(ev.target.value).toFixed(2),
    f: (Number(ev.target.value) * 9 / 5 + 32).toFixed(2)
  });
  
  const updateF = (ev: React.ChangeEvent<HTMLInputElement>) => updateTemp({
    c: ((Number(ev.target.value) - 32) * 5 / 9).toFixed(2),
    f: Number(ev.target.value).toFixed(2)
  });

  return (
    <div>
      <h1>Hello world!</h1>
      <p>{userAgent}</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> Count Up 👍 </button>
      <h5>Celsius: {temp.c}</h5>
      <input type = "range" value = {temp.c} onChange = {updateC} />
      <input type = "number" value = {temp.c} onChange = {updateC} />
      <h5>Fahrenheit: {temp.f}</h5>
      <input type = "range" value = {temp.f} onChange = {updateF} />
      <input type = "numbre" step = "0.01" value = {temp.f} onChange = {updateF} />
    </div>
  );
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

export default Home;