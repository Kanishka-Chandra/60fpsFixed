export const metadata = {
  title: 'Home - Talent',
  description: 'Page description',
}

import Hero from '@/components/hero'
import HeroPrime from '@/components/HeroPrime'
import Clients from '@/components/clients'
import Explainer from '@/components/explainer'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import FeaturesPrim from '@/components/featuresPrim'
import Services from '@/components/services'
import Pricing from '@/components/pricing'
import Testimonial from '@/components/testimonial'
import Faqs from '@/components/faqs'
import Cta from '@/components/cta'
import { ContainerScroll, Card } from '@/components/ui/container-scroll-animation';
import { StickyScroll } from '@/components/ui/StickyScroll'
import Hero60 from '@/components/Hero60'
import ClientsMarquee from '@/components/ui/ClientsMarquee'
import ExplainerCircles from '@/components/ui/ExplainerCircles'

export default function Home() {
  const stickyContent = [
    {
      title: "Section 1",
      description: "This is the description for section 1.",
      content: <div>This is the content for section 1</div>
    },
    {
      title: "Section 2",
      description: "This is the description for section 2.",
      content: <div>This is the content for section 2</div>
    },
    {
      title: "Section 1",
      description: "This is the description for section 1.",
      content: <div>This is the content for section 1</div>
    },
    {
      title: "Section 2",
      description: "This is the description for section 2.",
      content: <div>This is the content for section 2</div>
    }
  ];
  return (
    <>
      <Hero60 />
      {/* <HeroPrime /> */}
      {/* <Hero /> */}
      {/* <FeaturesPrim /> */}
      <Clients />
      {/* <ClientsMarquee /> */}
      {/* <Explainer /> */}
      {/* <ExplainerCircles /> */}
      {/* <Features01 /> */}
      {/* <ContainerScroll titleComponent={<div className='text-5xl font-bold mb-12 font-poppins' >Welcome to Our Page</div>} >

        <div className='text-white overflow-hidden'>

          <iframe
            className='abosolute top-0 left-0 h-full w-full'
            id="youtube-video"

            src="https://www.youtube-nocookie.com/embed/WoLkgCzzGE4?modestbranding=1&showinfo=0&rel=0&autoplay=1&loop=1&controls=0&mute=1&iv_load_policy=3&fs=0&disablekb=1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          // style={{ position: "absolute", top: 0, left: 0 }}
          >

          </iframe>

        </div>
      </ContainerScroll> */}
      {/* <StickyScroll content={stickyContent} contentClassName="right-side-sticky">

      </StickyScroll> */}
      {/* <Features02 /> */}
      <Services />
      {/* <ClientsMarquee /> */}
      {/* <Pricing /> */}
      {/* <Testimonial /> */}

      {/* <Faqs /> */}
      {/* <Cta /> */}
    </>
  )
}
