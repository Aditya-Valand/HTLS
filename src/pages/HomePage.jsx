// src/pages/HomePage.jsx
import { HeroSection } from '../components/sections/Hero.jsx';
import { FocusPillarsSection } from '../components/sections/focus-pillars-section.jsx';
import {AboutSection} from '../components/sections/about-section.jsx';
import { RecentUpdatesSection } from '../components/sections/recent-updates-section.jsx';
import { GetInvolvedSection } from '../components/sections/get-involved-section.jsx';
import { MissionSection } from "../components/sections/Mission-section";
import { WhatWeDoSection } from "../components/sections/whatwedo.jsx";
import { EventsSection } from "../components/sections/event-section.jsx";
import { CommunitySection } from "../components/sections/community-section.jsx";
import { CollaboratorsSection } from "../components/sections/collaborators-section.jsx";
import JoinCommunity from '../components/sections/JoinCommunity.jsx';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FocusPillarsSection />
      <AboutSection />
      <MissionSection />
    <WhatWeDoSection />
    {/* <EventsSection /> */}
    <JoinCommunity />
    {/* <CommunitySection /> */}
    <CollaboratorsSection />
      <RecentUpdatesSection />
      <GetInvolvedSection />
    </>
  )
}