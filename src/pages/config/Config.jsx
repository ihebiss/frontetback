import React, { useEffect, useState } from 'react';
import AddEventForm from '../formmee/AddEventForm';
const Config = () => {
  const staticEvents = {
    "events" : [
      {
        _id: '1',
        numevent: 'Event1',
        dateevent: '12/11/2024',
        datefinevent: '12/13/2024',
        datejour: '12/11/2024'
      },
      {
        _id: '2',
        numevent: 'Event2',
        dateevent: '01/01/2025',
        datefinevent: '01/03/2025',
        datejour: '01/01/2025'
      },
      {
        _id: '3',
        numevent: 'Event2',
        dateevent: '01/01/2025',
        datefinevent: '01/03/2025',
        datejour: '01/01/2025'
      }
    ],
  "weekConfig" : [{"monday": true}, {"monday": true}, {"monday": true}, {"monday": true}]
  
  };
    console.log(staticEvents);

    const [events, setEvents] = useState(staticEvents.events);
    const [editingEvent, setEditingEvent] = useState(null);    useEffect(()=>{
      console.log("events : ", events)
    }, [events])

  return (
    <>
        <AddEventForm  events={events} setEvents={setEvents} editingEvent={editingEvent} setEditingEvent={setEditingEvent} />
      
    </>
  );
};

export default Config;
