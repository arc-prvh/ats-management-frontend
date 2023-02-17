import React from 'react';
import Grid from '@/components/grid/grid';
import Card from '@/components/card/card';
import { useAccessToken } from '@/contexts/authContext';
import { useUser } from '@/contexts/userContext';

const jobs = [
  {
    companyName: 'Inspire Fitness Co.',
    location: 'New York, USA',
    title: 'Front-end Developer',
    type: 'Full Time',
    skills: ['CSS3', 'HTML5', 'Javascript', 'Bootstrap', 'Jquery'],
    salary: '5000',
  },
  {
    companyName: '',
    location: 'New York, USA',
    title: 'Front-end Developer',
    type: '',
    skills: [],
    salary: '5000',
  },
  {
    companyName:
      'Inspire Fitness Co. Inspire Fitness Co. Inspire Fitness Co. Inspire Fitness Co.',
    location: 'New York, USA',
    title:
      'Front-end Developer Front-end Developer Front-end Developer Front-end Developer Front-end Developer',
    type: 'Full Time',
    skills: ['CSS3', 'HTML5', 'Javascript', 'Bootstrap', 'Jquery'],
    salary: '5000',
  },
  {
    companyName: 'Inspire Fitness Co.',
    location: 'New York, USA',
    title: 'Front-end Developer',
    type: 'Full Time',
    skills: ['CSS3', 'HTML5', 'Javascript', 'Bootstrap', 'Jquery'],
    salary: '5000',
  },
  {
    companyName: 'Inspire Fitness Co.',
    location: 'New York, USA',
    title: 'Front-end Developer',
    type: 'Full Time',
    skills: ['CSS3', 'HTML5', 'Javascript', 'Bootstrap', 'Jquery'],
    salary: '5000',
  },
  {
    companyName: 'Inspire Fitness Co.',
    location: 'New York, USA',
    title: 'Front-end Developer',
    type: 'Full Time',
    skills: ['CSS3', 'HTML5', 'Javascript', 'Bootstrap', 'Jquery'],
    salary: '5000',
  },
];

function JobList() {
  const accessToken = useAccessToken();
  const user = useUser();
  function listToString(arr) {
    let str = '';

    for (const s of arr) {
      str += `${s}, `;
    }

    return str;
  }

  return (
    <Grid>
      {jobs.map(({ companyName, location, title, type, skills, salary }, i) => (
        <Card
          companyName={companyName}
          location={location}
          title={title}
          type={type}
          skills={listToString(skills)}
          salary={salary}
          key={i}
        />
      ))}
    </Grid>
  );
}

export default JobList;
