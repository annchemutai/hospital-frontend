<script setup>
import {ref} from 'vue'

const patients = [
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

const showAddDialog = ref(false)

</script>

<template>
    <v-container>
        <v-row>
            <v-col md="10">
                <h1>Patients</h1>
            </v-col>
            <v-col md="2">
                <v-btn class="ma-2" color="primary" icon="mdi-plus" @click="showAddDialog = true"></v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <v-table class="border">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Residence</th>
                        <th>National ID</th>
                        <th>Date of Birth</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in patients">
                            <td>{{ item.firstName + " " + item.lastName }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{ item.residence }}</td>
                            <td>{{ item.nationalId }}</td>
                            <td>{{ item.dob }}</td>
                            <td> 
                                <v-btn color="primary" size="small">
                                    <v-icon icon="mdi-eye" ></v-icon> 
                                    View
                                </v-btn> 
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>

    <!-- Add Patient -->
    <v-dialog v-model="showAddDialog" max-width="50%" >
        <v-form>
            <v-card>
                <v-row>
                    <v-card-text>Add Patient</v-card-text>
                    <v-spacer></v-spacer>
                    <v-btn class="ma-2" color="primary" icon="mdi-close" @click="showAddDialog = false"></v-btn>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="First Name" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Last Name" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Email" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="Phone" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Residence" outlined></v-text-field>
                    </v-col>
                    <v-col md="6">
                        <v-text-field label="National ID" outlined></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <v-text-field label="Date or Birth" outlined></v-text-field>
                    </v-col>
                </v-row>
            </v-card>
        </v-form>
    </v-dialog>
</template>