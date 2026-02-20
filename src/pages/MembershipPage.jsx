import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MembershipPage.css'

function MembershipPage() {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const navigate = useNavigate()

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
        'Basic equipment access',
        'Cardio area access',
        'Free fitness assessment'
      ],
      notIncluded: [
        'Group classes',
        'Personal training',
        'Spa access'
      ],
      popular: false,
      bestFor: 'Individuals who prefer independent workouts'
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
        'Free gym merchandise',
        'Guest passes (2/month)',
        'Locker rental included',
        'Mobile app access'
      ],
      notIncluded: [
        'Spa & sauna access',
        'Unlimited personal training'
      ],
      popular: true,
      bestFor: 'Fitness enthusiasts who want variety and guidance'
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
        'Guest passes (4/month)',
        'Towel service',
        'Supplement discounts',
        'Private locker',
        'Recovery room access'
      ],
      notIncluded: [],
      popular: false,
      bestFor: 'Serious athletes and those seeking premium experience'
    }
  ]

  const faqs = [
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes! All our memberships are flexible. You can cancel anytime with 30 days notice.'
    },
    {
      question: 'Is there a joining fee?',
      answer: 'We currently have a promotion with no joining fees. This offer is available for a limited time.'
    },
    {
      question: 'Can I freeze my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.'
    },
    {
      question: 'Do you offer student discounts?',
      answer: 'Yes! Students get 15% off on Basic and Standard memberships with valid student ID.'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can change your membership tier at any time. Changes take effect in the next billing cycle.'
    }
  ]

  return (
    <div className="membership-page">
      <div className="page-hero">
        <h1 className="page-title">MEMBERSHIP <span className="highlight">PLANS</span></h1>
        <p className="page-subtitle">
          Choose the perfect plan that fits your lifestyle and fitness goals
        </p>
      </div>

      <div className="billing-section">
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
      </div>

      <div className="membership-plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`membership-detail-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
            
            <div className="plan-header">
              <h2>{plan.name}</h2>
              <p className="plan-desc">{plan.description}</p>
              
              <div className="price-display">
                <span className="currency">$</span>
                <span className="amount">
                  {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                </span>
                <span className="period">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
              </div>
              
              <p className="best-for">
                <strong>Best for:</strong> {plan.bestFor}
              </p>
            </div>

            <div className="plan-features">
              <h3>What's Included</h3>
              <ul className="included-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>

              {plan.notIncluded.length > 0 && (
                <>
                  <h3 className="not-included-title">Not Included</h3>
                  <ul className="not-included-list">
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx}>
                        <span className="cross-icon">✗</span> {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="comparison-section">
        <h2>Compare Plans</h2>
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gym Access Hours</td>
                <td>6 AM - 10 PM</td>
                <td>24/7</td>
                <td>24/7</td>
              </tr>
              <tr>
                <td>Group Classes</td>
                <td>✗</td>
                <td>✓ Unlimited</td>
                <td>✓ Unlimited</td>
              </tr>
              <tr>
                <td>Personal Training</td>
                <td>✗</td>
                <td>2 sessions/month</td>
                <td>8 sessions/month</td>
              </tr>
              <tr>
                <td>Guest Passes</td>
                <td>✗</td>
                <td>2/month</td>
                <td>4/month</td>
              </tr>
              <tr>
                <td>Spa & Sauna</td>
                <td>✗</td>
                <td>✗</td>
                <td>✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2>Still Have Questions?</h2>
        <p>Our team is here to help you choose the right plan</p>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default MembershipPage
