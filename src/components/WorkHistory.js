import React from 'react';
import JobCard from './JobCard';
import '../styles/WorkHistory.css';

function WorkHistory() {
  return (
    <section id="workHistory" className="workHistory">
        <h2>Work History</h2>
        <div className="job-list">
            <JobCard
                title="Owner Operator"
                company="Conversion Web Design"
                dates="May 2024 – Present"
                description="Design affordable websites tailored to specific business goals and target audience, Build comprehensive search engine optimization (SEO) services, Quarterly analytical reporting, Designed branding for businesses, and Design and development of customer relationship management (CRM) tool."
            />
            <JobCard
                title="Lead Software/DevOps Engineer"
                company="Universities Space Research Association (USRA)"
                dates="April 2021 – March 2025"
                description="Managed comprehensive AWS infrastructure across 30+ servers in six environments spanning GovCloud and Commercial sectors, Engineered secure CI/CD pipelines decreasing deployment time by 65% while ensuring 99.9% deployment reliability, Designed and developed multiple software components using Node.js, Bash, and Python to automate infrastructure management, Created automation scripts for data verification, backup, recovery, and configuration management, minimizing manual intervention by 75%, Sustained critical systems with 99.95% uptime through proactive monitoring and optimization, Orchestrated and analyzed 100+ TB datasets for accurate decision-making and reporting, and Leveraged AWS CLI to develop custom automation tools lowering administrative overhead by 40%."
            />
            <JobCard
                title="Web Developer"
                company="Radix Data"
                dates="March 2020 – April 2021"
                description="Developed comprehensive PowerShell automation scripts integrated with ARM templates for end-to-end environment deployment, Automation of client environment provisioning trimming setup time from days to hours, Formulated reproducible deployment processes for full-stack implementation from infrastructure to application layer, Administered Azure subscriptions and resources, balancing cost while preserving performance across multiple environments, and Decreased application deployment errors by 50% through improved CI/CD processes."
            />
            <JobCard
                title="Developer in Residence"
                company="Digital Crafts"
                dates="December 2019 – February 2020"
                description="Assisted teaching staff and tutored students in full-stack development technologies and best practices, Conducted algorithm presentations and provided critical thinking exercises for software development concepts, Guided students through troubleshooting and bug-fixing processes, improving their problem-solving skills, and Curated educational codebase repositories and documentation for student reference."
            />
            <JobCard
                title="Systems Administrator"
                company="Transcore"
                dates="December 2016 – August 2019"
                description="Administered diverse infrastructure including Windows and Linux servers for mission-critical systems, Deployed and configured VLAN configurations and network routing protocols boosting network security and performance, Delivered expert-level troubleshooting across multiple operating systems and network infrastructures, Trained technical staff in system operations and troubleshooting procedures, Accelerated system recovery time by 70% through implementation of advanced backup solutions, and Collaborated with network teams on infrastructure planning and implementation projects."
            />
        </div>
        <a 
            href={`${process.env.PUBLIC_URL}/resume/Patrick_Moore_Resume.pdf`} 
            className="resume-download" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Download Resume
        </a>
        <p className="reference-note">
            References available upon request.
        </p>
    </section>
  );
}

export default WorkHistory;