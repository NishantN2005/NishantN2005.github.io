import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';
import { Card, CardContent } from '@mui/material';

function ApplicationTimeline({ timelineData }) {
  return (
    <Timeline
      sx={{
        // Hide the opposite content on mobile and adjust its flex on larger screens.
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: { xs: 0, md: 0.15 },
          display: { xs: 'none', md: 'block' },
        },
        maxWidth: { xs: '100%', md: '70%' },
        py: 4,
        mx: 'auto',
      }}
    >
      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <TimelineItem sx={{ alignItems: 'start', '&:before': { display: 'none' } }}>
            <TimelineOppositeContent
              sx={{
                color: '#061e2a',
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              {item.leftText}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#061e2a', width: '40px', height: '40px' }} />
              {index !== timelineData.length - 1 && (
                <TimelineConnector
                  sx={{
                    bgcolor: '#061e2a',
                    height: { xs: '50px', md: '100px' },
                  }}
                />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ px: 2 }}>
              <Card
                sx={{
                  backgroundColor: 'white',
                  boxShadow: 3,
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <h2 className="text-2xl font-semibold text-icgblue">{item.heading}</h2>
                  <p className="text-lg text-icgblue">{item.content}</p>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      ))}
    </Timeline>
  );
}

export default ApplicationTimeline;
