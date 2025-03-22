import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const timelineData = [
  {
    leftText: 'Pre-Project',
    heading: 'Initial Consultation',
    content: 'We begin with an initial consultation to learn more about your organization, including your mission, operations, and goals. We’ll discuss any challenges you’re facing and how we can assist. Upon mutual agreement, we’ll proceed with the project.',
  },
  {
    leftText: 'Week 1',
    heading: 'Project Team Introduction',
    content: 'Meet the team you’ll collaborate with over the next 6-8 weeks. During this kickoff call, the team will introduce themselves, discuss your pain points, clarify objectives, and draft a tailored project roadmap.',
  },
  {
    leftText: 'Week 2-4',
    heading: 'Research & Analysis',
    content: 'The team dives into research, ideation, and data analysis to develop customized recommendations. Progress updates will be shared during weekly check-ins to ensure alignment.',
  },
  {
    leftText: 'Week 5',
    heading: 'Mid-Project Review',
    content: 'We’ll conduct a formal mid-project check-in, providing a presentation or written deliverable to confirm we’re on the right path and make adjustments if necessary.',
  },
  {
    leftText: 'Week 6-8',
    heading: 'Final Presentation',
    content: 'After thorough review by the Director of Consulting and project mentor(s), the team will present their findings and actionable recommendations in a detailed final presentation.',
  },
  {
    leftText: 'Post-Project',
    heading: 'Client Feedback',
    content: 'We conclude by gathering feedback on the team’s performance, onboarding process, communication, and the quality of our deliverables to continually improve our approach.',
  },
];

function TimelineComponent() {
  return (
    <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {
      flex: 0.2,
    }, maxWidth: '70%', paddingTop: '2rem' }}>
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <TimelineItem
            sx={{
              display: 'flex',
              alignItems: 'start',
              '&:before': { display: 'none' },
            }}
          >
            <TimelineOppositeContent
              sx={{
                color: '#013167',
                fontFamily: '"Marcellus", serif',
                m: 0,
                pr: 2,
                pt: 2,
                minWidth: 100,
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              {item.leftText}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#013167', width: '40px', height: '40px' }} />
              {/* Only render the connector if it's not the last item */}
              {index !== timelineData.length - 1 && (
                <TimelineConnector sx={{ bgcolor: '#013167', height: '100px' }} />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ px: 2 }}>
              <h2 className="text-2xl font-semibold text-[#013167]">{item.heading}</h2>
              <p className="text-lg text-[#013167]">{item.content}</p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      ))}
    </Timeline>
  );
}

export default TimelineComponent;
