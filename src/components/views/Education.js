import React from 'react';
export default function Education() {
  const education = [
    {
      college: `Smt kamala and Venkama M Agadi College of Engineering and Technology, Laxmeshwar`,
      type: ` Bachelor's degree`,
      major: `Computer Science`,
      fromyear: 'JUL 2007',
      toyear: 'JUL 2010',
    },
    {
      college: 'KLEs polytechnic college Hubli ',
      type: 'Diploma',
      major: 'Computer Science',
      fromyear: 'JUL 2003',
      toyear: 'JUL 2006',
    },
  ];
  return (
    <div>
      <h1 className="header">Education</h1>
      <ul>
        {education.map((item) => {
          return (
            <li>
              <div>{item.type}</div>
              <div>in {item.major}</div>
              <div>{item.college}</div>
              <div>From : {item.fromyear.toLocaleLowerCase()}</div>
              <div>To:{item.toyear.toLocaleLowerCase()}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
