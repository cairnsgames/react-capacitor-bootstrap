import React from 'react';
import { useLocation } from "../hooks/uselocation";
import ExamplesHero1 from './heros/example1';
import ExampleFeatures1 from './features/featuresexample1';
import ExamplePricing from './pricing/pricing';

const Examples = () => {    
  const { hash } = useLocation();

  if (hash.includes("heros")) {
    return (<ExamplesHero1 />);
  }
  if (hash.includes("features")) {
    return (<ExampleFeatures1 />)
  }
  if (hash.includes("pricing")) {
    return (<ExamplePricing />)
  }

    return (
        <div>
            <h1>Examples</h1>
            <p>Examples of how to use the components</p>
        </div>
    );
}

export default Examples;