import React from 'react';
export default function Summary() {
  const summary = [
    `Lead Frontend development for the group of Oracle Health Care Product and Honeywell ACS Software CoE, with responsibility to drive software revenue growth and market differentiation by realizing cutting edge technologies into products and solutions.`,
    `Experience in Integrated cloud-based security management systems and enterprise software development at Honeywell R&D Center, Bangalore.`,
    `Video domain expertise as design for key software applications for Video Surveillance Product lines in a true global engineering development environment.
Lead design, development & mentoring focus for a multi-disciplinary team.`,
    `Trained in a highly disciplined software development process aligned to CMMi, Six Sigma & Honeywell Operating System (HOS) concepts. `,
    `Recipient of 3 times Star Technical Award in Honeywell Technology Solutions Bangalore. `,
  ];
  return (
    <div>
      <h1 className="header">Summary</h1>
      <ul>
        {summary.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
