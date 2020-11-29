<template>
    <div class="container">
      <div class="card ">
        <div class="card-header text-center">
          <h3>Update Student</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="updateStudent()">
            <div class="form-group">
              <label class="font-weight-bold">Name</label>
              <input
              type="text"
              id="name"
              name="name"
              class="form-control"
              v-model="student.name"
              >
            </div>

            <div class="form-group">
              <label class="font-weight-bold">Email</label>
              <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              v-model="student.email"
              >
            </div>
            <div class="form-group">
              <label class="font-weight-bold">Phone</label>
              <input
              type="text"
              id="phone"
              name="phone"
              class="form-control"
              v-model="student.phone"
              >
            </div>

            <div class="form-group">
              <button type="submit" class=" btn btn-primary">Update</button>
            </div>

          </form>
        </div>
      </div>
    </div>
</template>

<script>
import StudentService from '../../services/StudentService';

export default {
  name: 'EditStudentComponent',
  data() {
    return {
      student: {
      },
    };
  },

  mounted() {
    this.getStudentById();
  },

  methods: {
    async getStudentById() {
      const { id } = this.$route.params;
      const response = await StudentService.getStudentById(id);

      this.student = { ...response };
    },

    async updateStudent() {
      // Chamada do service passando as propriedades por meio do 'student' (funciona)
      await StudentService.updateStudent(this.student);
      this.$router.push({
        name: 'list',
      });
    },
  },
};

</script>
