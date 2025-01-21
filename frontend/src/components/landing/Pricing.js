import React from 'react';
import './Pricing.css';

function Pricing() {
  // Example pricing data, you'll likely fetch this from a backend in a real app
  const plans = [
        {
          name: 'Basic',
          price: '$0',
          features: ['Up to 5 Projects', 'Limited Features', 'Email Support'],
          cta: 'Start Free Trial'
        },
        {
          name: 'Pro',
          price: '$29',
          features: ['Unlimited Projects', 'Full Feature Access', 'Priority Support'],
          cta: 'Choose Plan'
        }
      ];
    
      return (
        <section className='pricing'>
          <h2>Pricing Plans</h2>
          <div className='pricing-plans'>
            {plans.map((plan) => (
              <div className='plan' key={plan.name}>
                <h3>{plan.name}</h3>
                <p className='price'>{plan.price}/month</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button>{plan.cta}</button>
              </div>
            ))}
          </div>
        </section>
      );
    }
    
    export default Pricing;