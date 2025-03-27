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


function TimelineComponent({timelineData}) {
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
                color: '#061e2a',
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
              <TimelineDot sx={{ bgcolor: '#061e2a', width: '40px', height: '40px' }} />
              {/* Only render the connector if it's not the last item */}
              {index !== timelineData.length - 1 && (
                <TimelineConnector sx={{ bgcolor: '#061e2a', height: '100px' }} />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ px: 2 }}>
              <h2 className="text-2xl font-semibold text-icgblue">{item.heading}</h2>
              <p className="text-lg text-icgblue">{item.content}</p>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      ))}
    </Timeline>
  );
}

export default TimelineComponent;
