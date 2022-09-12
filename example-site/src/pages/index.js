import React from 'react';
import {
    AboutSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Amogh Joshi | Software Engineer" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="A little about me" />
                <ProjectsSection sectionId="workHistory" heading="My Work Experience" />
                <InterestsSection sectionId="skills" heading="My Skills" />
            </Page>
        </>
    );
}
