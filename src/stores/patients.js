import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', () => {

    const createPatientsList = () =>[
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com",
            phone: "0721345897",
            residence: "123, Main Street",
            nationalId: "12345678",
            dob: "1995-04-03"
        },
        {
            id: 2,
            firstName: "Jane",
            lastName: "Doe",
            email: "janedoe@example.com",
            phone: "0790345897",
            residence: "124, Main Street",
            nationalId: "22345678",
            dob: "1998-06-03"
        },
        {
            id: 3,
            firstName: "Jack",
            lastName: "Doe",
            email: "jackdoe@example.com",
            phone: "0787345897",
            residence: "125, Side Street",
            nationalId: "98745678",
            dob: "1999-04-04"
        },
        {
            id: 4,
            firstName: "Joseph",
            lastName: "Doe",
            email: "josephdoe@example.com",
            phone: "0729745897",
            residence: "823, Side Street",
            nationalId: "76345678",
            dob: "2005-09-03"
        }
    ]
 
    const patients = ref(createPatientsList())

    const selectedPatientId = ref(null)
    const selectedPatient = computed(() => {
        return patients.value.find(user => user.id === selectedPatientId.value)
    })

    function selectPatient(id) {
        selectedPatientId.value = id
    }

    function addPatient(data){
        const lastId = patients.value.length > 0 ? patients.value[patients.value.length - 1].id : 0
        data.id = lastId + 1
        patients.value.push(data)
    }

    const resetPatients = () => {
        patients.value = createPatientsList()
    }

    function newTriage(data, patientId){
        const patient = patients.value.find(
            p => p.id === patientId
        );
        patient.triage = data
    }
    function newConsultation(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.consultation = data
    }
    function newLab(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.lab = data
    }
    function newPrescription(data, patientId){
        const patient = patients.value.find(p => p.id === patientId);
        patient.prescription = data
    }

  return { 
    patients, 
    addPatient, 
    selectedPatientId, 
    selectedPatient, 
    selectPatient, 
    resetPatients,
    newTriage,
    newConsultation,
    newLab,
    newPrescription,
}
},
{
    persist: true,
})
