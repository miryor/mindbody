import React from 'react';
import { ScheduleItem } from './types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

interface ListViewProps {
    data: ScheduleItem[];
    userTimezone: string | null;
}

const ListView: React.FC<ListViewProps> = ({ data, userTimezone }) => {
    console.log('User timezone in ListView:', userTimezone);

    if (!data || data.length === 0) {
        return (
            <List className="list-view">
                <ListItem>
                    <ListItemText primary="No schedule items found for this period." />
                </ListItem>
            </List>
        );
    }

    return (
        <List className="list-view">
            {data.map(item => (
                <ListItem key={item.id} divider alignItems="flex-start">
                    <ListItemText
                        primary={`${item.name} (${item.type})`}
                        secondary={
                            <React.Fragment>
                                <Typography component="span" variant="body2" color="text.primary">
                                    {`Starts: ${new Date(item.startDateTime).toLocaleString()}`}
                                    {` - Ends: ${new Date(item.endDateTime).toLocaleString()}`}
                                    {item.studioTimezone && ` (${item.studioTimezone})`}
                                </Typography>
                                <br />
                                {item.instructorName && `Instructor: ${item.instructorName}`}
                                {item.locationName && ` - Location: ${item.locationName}`}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default ListView; 