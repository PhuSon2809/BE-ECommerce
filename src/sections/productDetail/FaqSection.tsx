import { useState } from 'react'

import { Faqs } from '~/assets/mocks/faq'
import { FaqCard } from '~/components/faqCard'

function FaqSection() {
  const [faqActive, setFaqActive] = useState<number>(0)

  return (
    <section className='xs:px-2 sm:px-4 xs:pt-5 sm:pt-20'>
      <h1 className='xs:text-[32px] sm:text-[56px] font-bold leading-[76px] text-left xs:ml-0 sm:ml-24 xs:mb-0 sm:mb-10'>
        FAQ of PO5
      </h1>
      <div className='flex xs:flex-col sm:flex-row xs:items-start sm:items-center xs:gap-3 sm:gap-5'>
        {Faqs.map((faq, index) => (
          <FaqCard key={index} index={index} faq={faq} setFaqActive={setFaqActive} isActive={index === faqActive} />
        ))}
      </div>
    </section>
  )
}

export default FaqSection
