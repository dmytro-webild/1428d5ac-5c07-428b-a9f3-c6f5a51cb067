"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeLargeTitles"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Croydon Plumbing & Heating"
      button={{
        text: "07700 179408",
        href: "tel:07700179408",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Luxury Plumbing & Heating Experts in Croydon"
      description="Same-day premium service, transparent fixed pricing, and white-glove care for homes and businesses. Rated 5.0 ★★★★★ by our clients."
      tag="24/7 Emergency • Elite Response"
      buttons={[
        {
          text: "24/7 Emergency Call",
          href: "tel:07700179408",
        },
        {
          text: "Free Quote",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-porcelain-sink-with-towels_1203-1317.jpg",
          imageAlt: "Luxury home plumbing",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/part-interior-kitchen-black-modern-minimalism_169016-20012.jpg",
          imageAlt: "Professional boiler installation",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/faucet-water-sink-decoration-interior-bathroom_74190-10708.jpg",
          imageAlt: "Emergency repair service",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fluffy-white-towel-warms-sleek-radiator-modern-bathroom_157027-4095.jpg",
          imageAlt: "Modern bathroom fitting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/bathrobe-modern-bathtub_1203-1498.jpg",
          imageAlt: "Heating system diagnostics",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/black-wall-radiator-geometry-warmth-contemporary-interior_169016-68927.jpg",
          imageAlt: "Professional customer care",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Elite Craftsmanship, Premium Solutions"
      description="Comprehensive plumbing, heating & emergency repairs with modern diagnostics and guaranteed workmanship."
      accordionItems={[
        {
          id: "s1",
          title: "Plumbing Mastery",
          content: "From tap installation and leak repairs to full drain cleaning and sewer maintenance, we handle all plumbing needs with precision.",
        },
        {
          id: "s2",
          title: "Heating Solutions",
          content: "Boiler installations, smart thermostat setup, and underfloor heating systems for optimal home comfort.",
        },
        {
          id: "s3",
          title: "Emergency Care",
          content: "Rapid 24/7 emergency response for leaks, boiler breakdowns, and heating failures in Croydon.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-video-blogger-filming-new-vlog_1303-18372.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "24/7",
          title: "Emergency Dispatch",
          items: [
            "Available 365 days",
            "60min response time",
          ],
        },
        {
          id: "m2",
          value: "10+",
          title: "Years Expertise",
          items: [
            "Master engineers",
            "Local specialists",
          ],
        },
        {
          id: "m3",
          value: "5.0",
          title: "Google Rating",
          items: [
            "127+ reviews",
            "Guaranteed quality",
          ],
        },
      ]}
      title="Why Croydon's Finest Choose Us"
      description="Excellence, transparency, and unmatched response for our luxury clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah M.",
          role: "Homeowner",
          testimonial: "Absolutely outstanding service. My boiler broke at midnight and they sent an engineer within an hour.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",
        },
        {
          id: "t2",
          name: "James T.",
          role: "Homeowner",
          testimonial: "Impeccable attention to detail and high-end finish. Highly recommend for bathroom renovations.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-elegant-man-smiling_23-2148332976.jpg",
        },
        {
          id: "t3",
          name: "Oosabohien Frank",
          role: "Homeowner",
          testimonial: "Fast, honest, and very courteous. They repaired a major leak and even upgraded our piping.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-business-man-posing-with-crossed-arms_23-2149206526.jpg",
        },
        {
          id: "t4",
          name: "Elena R.",
          role: "Homeowner",
          testimonial: "Professional, clean, and fair pricing. The best plumbers I've worked with in London.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-african-american-woman-smiling-cheerful-friendly-face-laughing-confident_839833-29956.jpg",
        },
        {
          id: "t5",
          name: "Mark D.",
          role: "Business Owner",
          testimonial: "Reliable 24/7 service. Helped us fix a critical pipe failure quickly. Excellent communication.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-confident-businesswoman-wearing-formal-suit-standing-with-arms-folded_74855-10328.jpg",
        },
      ]}
      title="Trusted by Croydon Homeowners"
      description="Real experiences from our valued clients."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to get started? Reach our concierge team for a premium consultation or emergency support."
      buttons={[
        {
          text: "07700 179408",
          href: "tel:07700179408",
        },
        {
          text: "hello@croydonplumbing.co.uk",
          href: "mailto:hello@croydonplumbing.co.uk",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Plumbing",
              href: "#services",
            },
            {
              label: "Heating",
              href: "#services",
            },
            {
              label: "Emergency",
              href: "tel:07700179408",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Reviews",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Croydon Plumbing & Heating"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
