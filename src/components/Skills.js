import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills"  className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Cloud Platforms: AWS, Azure</li>
        <li>Operating Systems: Windows, Linux, MacOS</li>
        <li>Containerization: Docker</li>
        <li>IaC: ARM Templates, AWS CLI</li>
        <li>Programming Languages: Python, Node.js, Powershell, Bash, C#</li>
        <li>Version Control: Git, Branching Strategies, Repository Management</li>
        <li>Databases: PostgreSQL, MongoDB, SQL Server, Neo4j, ElasticSearch</li>
        <li>Web Technologies: ASP.NET Core, JavaScript, HTML, CSS, SSL Certificates, Apache Web Hosting</li>
        <li>Networking: TCP/IP, VLANs, Load Balancing, Routing Protocols</li>
        <li>Authentication and Autorization: RBAC, Users/Roles/Groups, IAM, SAML</li>
      </ul>
    </section>
  );
}

export default Skills;
