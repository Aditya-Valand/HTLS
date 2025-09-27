// src/pages/HomePage.jsx
import { HeroSection } from '../components/sections/Hero.jsx';
import { AboutSection } from '../components/sections/about-section.jsx';
import { RecentUpdatesSection } from '../components/sections/recent-updates-section.jsx';
import { GetInvolvedSection } from '../components/sections/get-involved-section.jsx';
import { MissionSection } from "../components/sections/Mission-section";
import { WhatWeDoSection } from "../components/sections/whatwedo.jsx";
import { EventsSection } from "../components/sections/event-section.jsx";
import { CommunitySection } from "../components/sections/community-section.jsx";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
    <WhatWeDoSection />
    {/* <EventsSection /> */}
    <CommunitySection />
      <RecentUpdatesSection />
      <GetInvolvedSection />
    </>
  )
}