import { useState } from 'react'
import './Membership.css'

function Membership() {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for beginners starting their fitness journey',
      monthlyPrice: 39,
      yearlyPrice: 390,
      features: [
        'Gym access (6 AM - 10 PM)',
        'Locker room facilities',
        'Free WiFi',
        'Basic equipment access'
      ],
      popular: false
    },
    {
      name: 'Standard',
      description: 'Most popular choice for serious fitness enthusiasts',
      monthlyPrice: 69,
      yearlyPrice: 690,
      features: [
        '24/7 gym access',
        'All group classes',
        'Personal trainer (2 sessions/month)',
        'Nutrition consultation',
        'Free gym merchandise'
      ],
      popular: true
    },
    {
      name: 'Premium',
      description: 'Ultimate package for maximum results and luxury',
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        'Everything in Standard',
        'Personal trainer (8 sessions/month)',
        'Spa & sauna access',
        'Priority class booking',
        'Meal prep guidance',
        'Guest passes (4/month)'
      ],
      popular: false
    }
  ]

  return (
    <section id="membership" className="membership">
      <div className="section-header">
        <h2 className="section-title">MEMBERSHIP <span className="highlight">PLANS</span></h2>
        <p className="section-subtitle">Choose the plan that fits your lifestyle</p>
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

      <div className="membership-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`membership-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
            <h3>{plan.name}</h3>
            <p className="plan-description">{plan.description}</p>
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
                  <span className="check-icon">✓</span> {feature}
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

export default Membership
