<template>
    <div >
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="text-center">Name</th>
              <th class="text-center">Email</th>
              <th class="text-center">Phone</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-center" >
            <tr v-for="student in students" :key="student.id">
              <td>{{ student.name}}</td>
              <td>{{ student.email}}</td>
              <td>{{ student.phone}}</td>
              <td>
                <router-link
                :to="{ name :'Update Student', params:{ id: student.id}}"
                class="btn btn-primary">
                Edit</router-link>
               </td>
               <td>
                <button
                @click="removeStudent(student.id)"
                class="btn btn-danger">
                Delete </button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>
import StudentService from '../../services/StudentService';

export default {
  name: 'ListStudentsComponent',
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.listAllStudents();
  },
  methods: {
    async listAllStudents() {
      const response = await StudentService.getStudents();
      this.students = response;
    },

    async removeStudent(id) {
      try {
        await StudentService.deleteStudent(this.id);
        // eslint-disable-next-line no-alert
        alert('Delete on Success');
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Failed to delete!');
      }
    },
  },
};
</script>
