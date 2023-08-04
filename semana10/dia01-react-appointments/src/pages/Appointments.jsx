import { useState } from "react"

import AppointmentsForm from "../appointments/AppointmentsForm"
import AppointmentsList from "../appointments/AppointmentsList"

const Appointments = () => {
    const [appointmentSelected, setAppointmentSelected] = useState({})
    const [appointments, setAppointments] = useState([])
  
    const handleSaveAppointment = (form) => {
      if (form.edit) {
        const indexActu = appointments.findIndex(appointment=> appointment.id===form.id)
        const UpdatedAppointments = [...appointments]
        UpdatedAppointments[indexActu] = form
        setAppointments(UpdatedAppointments)
      }else{
        setAppointments([...appointments, form])
      }
    }
  
    const handleRemove = (id) => {
      const newAppointments = appointments.filter(
        appointment => appointment.id !== id
      )
  
      setAppointments(newAppointments)
    }
    const handleEdit = (appointment) => {
        setAppointmentSelected(appointment)
      }
    
    return (
      <>
        <AppointmentsForm
          onSaveAppointment={handleSaveAppointment}
          appointment = {appointmentSelected}
        />
  
        <AppointmentsList
          appointments={appointments}
          onRemove={handleRemove}
          onEdit={handleEdit}
        />
      </>
    )
  }
  
  export default Appointments