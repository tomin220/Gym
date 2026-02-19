import { useState } from 'react'
import './Pricing.css'

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Free WiFi',
        '2 guest passes per month'
      ],
      popular: false
    },
    {
      name: 'Premium',
      monthlyPrice: 59,
      yearlyPrice: 590,
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer (2 sessions/month)',
        'Nutrition consultation',
        'Free gym merchandise'
      ],
      popular: true
    },
    {
      name: 'Elite',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Premium',
        'Personal trainer (8 sessions/month)',
        'Spa & sauna access',
        'Priority class booking',
        'Free supplements',
        'Meal prep service'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="section-header">
        <h2>Choose Your Plan</h2>
        <p>Flexible pricing options for every budget</p>
      </div>

      <div className="billing-toggle">
        <button 
          className={billingCycle === 'monthly' ? 'active' : ''}
          onClick={() => setBillingCycle('monthly')}
        >
          Monthly
        </button>
        <button 
          className={billingCycle === 'yearly' ? 'active' : ''}
          onClick={() => setBillingCycle('yearly')}
        >
          Yearly <span className="save-badge">Save 17%</span>
        </button>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">
                {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
              </span>
              <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
