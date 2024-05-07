import { useState } from 'react'

import { Faqs } from '~/assets/mocks/faq'
import { FaqCard } from '~/components/faqCard'

function FaqSection() {
  const [faqActive, setFaqActive] = useState<number>(0)

  return (
    <section className='pt-20'>
      <h1 className='text-[56px] font-bold leading-[76px] text-left ml-24 mb-10'>FAQ of PO5</h1>
      <div className='grid grid-cols-5 gap-5'>
        {Faqs.map((faq, index) => (
          <FaqCard key={index} index={index} faq={faq} setFaqActive={setFaqActive} isActive={index === faqActive} />
        ))}
      </div>
    </section>
  )
}

export default FaqSection
