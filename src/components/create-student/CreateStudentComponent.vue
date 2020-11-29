<template>
    <div class="container">
      <div class="card">
       <div class="card-header">
          <h3>Add Student</h3>
       </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm">
          <div class="form-group">
            <label class="font-weight-bold">Name:</label>
              <input class="form-control"
                     type="text"
                     placeholder="Type Your Name"
                     v-model="student.name"
                     required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Email:</label>
              <input class="form-control"
                     type="email"
                     placeholder="Type Your Email"
                     v-model="student.email"
                     required>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Phone:</label>
              <input class="form-control"
                     type="phone"
                      placeholder="Type Your Phone"
                      v-model="student.phone"
                      required>
          </div>
          <div class="form-group">
            <button type="submit" @click="submitNewStudent" class="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
    </div>
</template>

<script>
import StudentService from '../../services/StudentService';

export default {
  components: {
    name: 'CreateStudentComponent',
  },
  data() {
    return {
      student: {
        name: null,
        email: null,
        phone: null,
      },
    };
  },
  methods: {
    async submitNewStudent() {
      try {
        await StudentService.createNewStudent(this.student);
        this.$router.push({
          name: 'List All Students',
        });
      } catch (error) {
        // eslint-disable-next-line
        alert('erro inicial', error);
      }
    },
  },
};
</script>
